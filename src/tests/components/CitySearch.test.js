import React from "react";
import { render } from "@testing-library/react";
import CitySearch from "../../components/CitySearch";

describe("CitySearch", () => {
  const validProps = {
    searchTerm: "",
    setSearchTerm: () => {},
    getForecast: () => {},
    setFirstLine: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <CitySearch
        searchTerm={validProps.searchTerm}
        getForecast={validProps.getForecast}
        setSearchTerm={validProps.setSearchTerm}
        setFirstLine={validProps.setFirstLine}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // further tests planned:
  // it("renders correct placeholder text", () => {});
  // it("renders a button with 'submit'", () => {});
  // it("updates the data being displayed when the form is filled and submitted", () => {});
  // it("updates the first line based on the response code", () => {});
});
