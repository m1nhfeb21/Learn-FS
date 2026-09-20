import * as weatherApi from "./api/weatherApi";
import { describe, it, jest, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import WeatherWidget from "./WeatherWidget";

describe("WeatherWidget", () => {
  it("Lấy dữ liệu thời tiết thành công", async () => {
    jest.spyOn(weatherApi, "fetchWeather").mockResolvedValue("Nắng đẹp");

    render(<WeatherWidget />);

    const weatherText = await screen.findByText(/Nắng đẹp/i);

    expect(weatherText).toBeTruthy();

    expect(weatherApi.fetchWeather).toHaveBeenCalledTimes(1);
  });
});
