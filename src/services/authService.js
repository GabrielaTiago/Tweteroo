
import { throwCustomError } from "../errors/throwCustomErrors.js";
import { users } from "../mock/data.js";

function createUser(username, avatar) {
  const userExits = users.find((item) => item.username === username);
  const imageURLRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
  const validImage = imageURLRegex.test(avatar);

  if (userExits) throw throwCustomError("conflict", "This user is already in use");
  if (!validImage) throw throwCustomError("forbidden", "This isn't a valid image url");

  users.push({ username, avatar });
}

export { createUser };
