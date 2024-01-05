import { getLevel } from "../app.js";
import fetchData from "../http.js";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test.each([
  [123, "ok", "Ваш текущий уровень: ", 55],
  [64, "error", "Информация об уровне временно недоступна", ""],
])(
  "should call getLevel once with id %i and get response %s",
  (userId, responceStatus, message, health) => {
    fetchData.mockReturnValue({ status: responceStatus, level: health });
    const response = getLevel(userId);
    expect(response).toEqual(message + health);
    expect(fetchData).toHaveBeenCalledWith(`https://server/user/${userId}`);
  }
);
