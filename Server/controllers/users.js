import User from "../models/User";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id); // find user by id

    const friends = await Promise.all(
      // Promise.all() takes an array of promises and returns a single promise
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      // format the friends array
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        // destructure the friends array
        return { _id, firstName, lastName, occupation, location, picturePath }; // return the friends array
      }
    );
    res.status(200).json(formattedFriends); // send the formatted friends array
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/* UPDATE */
export const addRemoveFriend = async (req, res) => {
  // add or remove friend
  try {
    const { id, friendId } = req.params; // destructure the id and friendId from the request parameters
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      // if the user's friends array includes the friendId
      user.friends = user.friends.filter((id) => id !== friendId); // filter out the friendId from the user's friends array
      friend.friends = friend.friends.filter((id) => id !== id); // filter out the id from the friend's friends array
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }

    await user.save();
    await friend.save();

    const friends = await Promise.all(
      // Promise.all() takes an array of promises and returns a single promise
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      // format the friends array
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        // destructure the friends array
        return { _id, firstName, lastName, occupation, location, picturePath }; // return the friends array
      }
    );

    res.status(200).json(formattedFriends); // send the formatted friends array
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
