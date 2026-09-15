import { useSearchParams } from "react-router-dom";

import React from "react";

function CourseSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("q") || "";

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm khóa học..."
        value={keyword}
        onChange={(e) => {
          const value = e.target.value;
          if (value) {
            setSearchParams({ q: value });
          } else {
            setSearchParams({});
          }
        }}
      ></input>
    </div>
  );
}

export default CourseSearch;
