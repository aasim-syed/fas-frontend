import { Input } from "antd";

import React from "react";

const { Search } = Input;

const SearchBox = (props) => {
  return (
    <>
      <input
        
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder='Type to search...'
        enterButton="Search" size="large" loading
      />
    </>
  );
};

export default SearchBox;
