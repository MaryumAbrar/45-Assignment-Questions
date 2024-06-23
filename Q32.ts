let current_users: string[] = ["Maryum", "Mobina", "admin", "Armeen"];

let new_users: string[] = ["Ayesha", "Nageen", "admin", "Neha"];

for (let new_username of new_users) {
  if (current_users.some((username) => username.toLowerCase() === new_username.toLowerCase())) {
    console.log(`the person will need to enter a new username`);
  } else {
    console.log(`The username '${new_username}' is available.`);
  }
}