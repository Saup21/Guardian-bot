<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="./logo/Guardian-bot.png" alt="Logo" width="40%">

  <h1 align="center">Guardian-bot</h1>

  <h3 align="center">
    <i>The Goal is to Protect</i>
    <br />
    <br />
    <a href="https://github.com/Saup21/Guardian-bot/">View Demo</a>
    ·
    <a href="https://github.com/Saup21/Guardian-bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/Saup21/Guardian-bot/issues">Request Feature</a>
    <!-- .
    <a href="https://github.com/Saup21/chords/blob/main/doc/deploy.md">Deploy Walkthrough</a> -->
  </h3>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#configuration---discord-developer-portal">Configuration - Discord Developer Portal</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
<img align="left" src="./icons/about-icon.png" width="50px" height="50px" />

## About The Project

A lot of phishing and spam urls are getting circulated on discord these days. Those who are falling for the so called free gifts are ending up compromising their accounts.\
So I thought of making the *Guardian-bot* for our Discord Community.

<img align="left" src="./icons/build-icon.png" width="30px" height="30px" round="-3px"/>

### Built With

- [Typescript](https://www.typescriptlang.org/)
- [discord.js](https://discord.js.org/#/docs/discord.js/stable/general/welcome)
- [axios](https://www.npmjs.com/package/axios)
- [ipqualityscore.com](https://www.ipqualityscore.com/)

<!-- GETTING STARTED -->
<img align="left" src="./icons/walking-man-icon.png" width="50px" height="50px" />

## Getting Started

To get a local copy up and running follow these simple steps.

<img align="left" src="./icons/build-icon.png" width="30px" height="30px" />

### Prerequisites

  **You should have Javascript and  Typescript installed in your system. If not then don't worry the installation section has all the steps that you are going to need.**
- Active internet connection through out installation (Must)
- Account in [ipqualityscore.com](https://www.ipqualityscore.com/) (Must for Other Users)
- Javascript (Must for Other Users)
- Typescript (Must for Other Users)

## Installation

<img align="left" src="./icons/windows-icon-42331.png" width="30px" height="30px" />

### For Windows users

1. Fork the project.
2. Clone the forked repository.
    ```sh
    git clone https://github.com/<your_username>/Guardian-bot.git
    ```
3. Move to the directory.
    ```sh
    cd Guardian-bot
    ```
4. Create a Bot from the Discord Developer Portal and copy the Bot token. Create a `.env` file in the root directory and paste the Token.
    ```sh
    TOKEN = "Your Token"
    ```
5. Create an account at [ipqualityscore.com](https://www.ipqualityscore.com/) and go to [Malicious URL Scanner API Documentation](https://www.ipqualityscore.com/documentation/malicious-url-scanner-api/overview)
6. Copy the API PRIVATE KEY and paste it in the `.env` file as: 
    ```sh
    PRIV_KEY = "Your Private Key"
    ```
7. Copy the API URL and paste it in the `.env` file as: 
    ```sh
    API_URL="API URL FOR IPQUALITYSCORE.COM"
    ```
8. Install Typescript and ts-node globally
    ```sh
    npm i -g typescript ts-node
    ```
9. Install all the packages
    ```sh
    npm i
    ```
10. Invite the Bot to your server and run
  - To run in dev mode 
    ```sh
    npm run dev
    ```

<img align="left" src="./icons/linux-logo.png" width="30px" height="30px" />

### For Linux users

1. Fork the project.
2. Clone the forked repository.
    ```sh
    git clone https://github.com/<your_username>/Guardian-bot.git
    ```
3. Move to the directory.
    ```sh
    cd Guardian-bot/
    ```
4. Create a Bot from the Discord Developer Portal and copy the Bot token. Create a `.env` file in the root directory and paste the Token.
    ```sh
    TOKEN = "Your Token"
    ```
5. Create an account at [ipqualityscore.com](https://www.ipqualityscore.com/) and go to [Malicious URL Scanner API Documentation](https://www.ipqualityscore.com/documentation/malicious-url-scanner-api/overview)
6. Copy the API PRIVATE KEY and paste it in the `.env` file as: 
    ```sh
    PRIV_KEY = "Your Private Key"
    ```
7. Copy the API URL and paste it in the `.env` file as: 
    ```sh
    API_URL="API URL FOR IPQUALITYSCORE.COM"
    ```
8. Install Typescript and ts-node globally
    ```sh
    npm i -g typescript ts-node
    ```
9. Install all the packages
    ```sh
    npm i
    ```
10. Invite the Bot to your server and run
  - To run in dev mode 
    ```sh
    npm run dev
    ```

<!-- CONFIGURATION - DISCORD DEVELOPER PORTAL -->
<img align="left" src="./icons/configuration-screw.png" width="50px" height="50px" />

## Configuration - Discord Developer Portal

Go to the [Discord Developer Portal](https://discord.com/developers/docs/intro) to create your application and bot. You must give the following permissions:

- Admin Intent ✔️

<!-- ROADMAP -->
 <img align="left" src="./icons/road-map-icon.png" width="50px" height="50px"  />

## Roadmap

See the [open issues](https://github.com/Saup21/Guardian-bot/issues) for a list of proposed features (and known issues). Feel free to raise new issues.

<!-- CONTRIBUTING -->
 <img align="left" src="./icons/contributing.png" width="50px" height="50px" />

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch ( `git checkout -b feature/AmazingFeature` )
3. Add your Changes ( `git add .` )
4. Commit your Changes ( `git commit -m 'Add some AmazingFeature'` )
5. Push to the Branch ( `git push -u origin feature/AmazingFeature` )
6. Open a Pull Request


<!-- LICENSE -->
 <img align="left" src="./icons/license.png" width="50px" height="50px" />

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

<!-- Contributors -->
<img align="left" src="./icons/contributors.jpg" width="50px" height="50px" />

## Contributors
<table>
  <tr>
    <td>
	  <a href="https://github.com/Saup21/Guardian-bot/graphs/contributors">
        <img src="https://contrib.rocks/image?repo=Saup21/Guardian-bot" />
      </a>
    </td>
  </tr>
</table>

---

<p align="center">Saup21</p>
<p align="center">
<a href="https://github.com/Saup21/">
<img src="https://user-images.githubusercontent.com/58631762/120077716-60cded80-c0c9-11eb-983d-80dfa5862d8a.png" width="19">
</a>
</p>