"use client";

import { useAtom } from "jotai";
import { CheckIcon, CircleSlashIcon, SearchIcon } from "lucide-react";
import { useEffect } from "react";
import {
  categoriesFiltersAtom,
  platformsFiltersAtom,
  searchAtom
} from "src/lib/atoms";
import categories from "src/lib/filters/categories";
import platforms from "src/lib/filters/platforms";
import useSound from "use-sound";

const FilterOption = ({ id, group, value, name, checked, onChange }) => (
  <label htmlFor={`checkbox-${id}`} className="option">
    <input
      type="checkbox"
      id={`checkbox-${id}`}
      name={group}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {checked ? (
      <span className="icon checked">
        <CheckIcon />
      </span>
    ) : (
      <span className="icon unchecked">
        <CircleSlashIcon />
      </span>
    )}
    <span>{name}</span>
  </label>
);

const Sidebar = () => {
  const [platformsFilters, setPlatformsFilters] = useAtom(platformsFiltersAtom);
  const [categoriesFilters, setCategoriesFilters] = useAtom(
    categoriesFiltersAtom
  );
  const [search, setSearch] = useAtom(searchAtom);

  const soundUrl = "/sounds/click.mp3";
  const [play] = useSound(soundUrl);

  const handleOnChangePlatforms = (position) => {
    const newPlatformsFilters = platformsFilters.map((item, index) =>
      index === position ? !item : false
    );
    setPlatformsFilters(newPlatformsFilters);
    scrollToTop();
  };

  const handleOnChangeCategories = (position) => {
    const newCategoriesFilters = categoriesFilters.map((item, index) =>
      index === position ? !item : false
    );
    setCategoriesFilters(newCategoriesFilters);
    scrollToTop();
  };

  const scrollToTop = () => {
    const appsElement = document.querySelector("#apps");
    if (appsElement) {
      appsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (platformsFilters.indexOf(true) === -1) {
      setPlatformsFilters(
        platformsFilters.map((item, index) => (index === 0 ? !item : item))
      );
    }

    if (categoriesFilters.indexOf(true) === -1) {
      setCategoriesFilters(
        categoriesFilters.map((item, index) => (index === 0 ? !item : item))
      );
    }
  }, [
    platformsFilters,
    categoriesFilters,
    search,
    setPlatformsFilters,
    setCategoriesFilters
  ]);

  return (
    <aside className="themes-sidebar">
      <div className="filter-group">
        <div className="search-wrapper">
          <span className="icon search">
            <SearchIcon />
          </span>
          <input
            type="search"
            id="header-search"
            placeholder="Search for a theme"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <div className="filter-group">
        <span className="title">Platforms</span>
        {platforms.map((platform, index) => (
          <FilterOption
            key={index}
            id={`platforms-${platform.value}`}
            group="platforms"
            name={platform.name}
            value={platform.value}
            checked={platformsFilters[index]}
            onChange={() => {
              play();
              handleOnChangePlatforms(index);
            }}
          />
        ))}
      </div>
      <div className="filter-group">
        <span className="title">Categories</span>
        {categories.map((category, index) => (
          <FilterOption
            key={index}
            id={`categories-${category.value}`}
            group="categories"
            name={category.name}
            value={category.value}
            checked={categoriesFilters[index]}
            onChange={() => {
              play();
              handleOnChangeCategories(index);
            }}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
