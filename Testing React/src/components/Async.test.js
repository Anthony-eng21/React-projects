import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("Posts rendered correctly if request succeeds", async () => {
    //testing a 'mock' fetch() with jest library built in jest {}
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "FirstPost" }],
    });
    render(<Async />);

    //assertion third param is an object where we set the timeout for this async task to load in our post data
    const listItemElements = await screen.findAllByRole("listitem", {}, {});
    expect(listItemElements).not.toHaveLength(0);
  });
});
