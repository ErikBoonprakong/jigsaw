// const API_URL = "http://localhost:8080";
const API_URL = "https://puzzle-server-erik.herokuapp.com";

class Networking {
  async createUser(username, password, confirmation) {
    let response = await fetch(`${API_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        confirmation: confirmation,
      }),
    });

    let json = await response.json();
    return { json, status: response.status };
  }

  async postLogin(username, password) {
    let response = await fetch(`${API_URL}/sessions`, {
      method: "POST",
      credentials: "include",
      // sameSite: "None",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    let json = await response.json();
    if (json.message === "Success") {
      document.cookie = `sessionId=${json.sessionId}`;
      document.cookie = `user=${json.user}`;
      document.cookie = `user_id=${json.user_id}`;
      document.cookie = `userScore=${json.user_score}`;
    }
    return json;
  }

  async logOut() {
    let response = await fetch(`${API_URL}/sessions`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    document.cookie = `sessionId=`;
    document.cookie = `user=`;
    document.cookie = `user_id=`;
    return json;
  }

  async updateScore(id, score) {
    let response = await fetch(`${API_URL}/updatescore`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        score: score,
      }),
    });
    let json = await response.json();
    document.cookie = `userScore=${json.user_score}`;
  }
}

export default Networking;
