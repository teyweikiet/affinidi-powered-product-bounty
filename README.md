<br />
<div align="center">
  <a href="https://github.com/teyweikiet/affinidi-powered-product-bounty">
    <img src="public/favicon.ico" alt="Logo" width="50" height="50">
  </a>

  <h1 align="center" style="border-bottom: 0;">The Doctor Appointment App</h1>

  <p align="center">
    A doctor appointment app powered by Affinidi Login.
    <br />
    <a href="https://affinidi-powered-product-stackup-bounty.vercel.app/"><strong>View Demo</strong></a>
    <br />
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#instructions-to-use">Instructions to Use</a>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#development-instructions">Development Instructions</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-locally">Running locally</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

This is a submission for [StackUp Bounty: Build Your Affinidi-Powered Product](https://platform.campus.dev/learners/campaigns/build-decentralised-identities-with-affinidi/quests/bounty-build-your-affinidi-powered-product-7fcd?installation_gid=gid%3A%2F%2Fstackup-web%2FInstallation%2F0c08e6b1-4445-4b23-a848-0e92a13745ce).

The doctor appointment allows user to make a doctor appointment for virtual consultations. Logged in users will be recommended with doctors based on their locality and country. This allow better experience for users as doctors from the same locality and country will be able to better understand local culture and views of health. Besides, if further examinations are needed, doctors can easily refer patients to local health institutions.

### Features

- User who has logged in with Affinidi with be able to see recommendations for doctors based on their locality and country.

- User who has logged in with Affinidi will be able to make an appointment with all their details e.g. name, email, phone number, address, gender & date of birth prefilled. (refer codes [here](/app/components/Form/AppointmentForm.jsx#14-30))

- User can make doctor appointment without logging in. However, they will be missing out on the ability to primarily be shown doctors in their area. Also they will have to fill out their details.
  - A dismissable prompt will be shown to them to explain the benefits of logging in with Affinidi. (refer codes [here](/app/page.jsx#12-30))

## Instructions to Use

- Visit the website at [https://affinidi-powered-product-stackup-bounty.vercel.app/](https://affinidi-powered-product-stackup-bounty.vercel.app/). If not logged in, you will see a dismissable prompt on bottom right conner to explain the benefits of logging in with Affinidi.

- While not mandatory to make an appointment, you may click "Affinidi Login" button on top right corner of the page to login. After logging in, you will notice the copywriting will be updated to reflect your locality/country.

- After logging in, you will be redirected to the homepage. Click "Find doctors" button or scroll down to see a list of doctors based on your locality/country.

- Click on "Make an appointment" button to make an appointment.

- Choose the desired date and time for your appointment on first step of the form.

- Click "Next" button.

- If logged in, you details should be prefilled. Click "Submit" after confirming details are correct.

## Built With

- [Affinidi Login](https://www.affinidi.com/product/affinidi-login) - Decentralised Identity Management Solution

- [Next.js](https://nextjs.org/) - Frontend Framework

- [Next-auth](https://next-auth.js.org/) - Integrate Affinidi Login Provider with Next.js

- [Mantine](https://mantine.dev/) - For building functional, responsive & accesible UI

- [Tanstack Query](https://tanstack.com/query) - For efficient data fetching & caching

- [Vercel](https://vercel.com/) for hosting [frontend site](https://affinidi-powered-product-stackup-bounty.vercel.app/)

## Development Instructions

### Installation

1. Clone the repo
```sh
git clone https://github.com/teyweikiet/affinidi-powered-product-bounty
```

2. Install dependencies
```sh
npm install
```

### Running locally

1. Copy and modify .env accordingly. (Refer comments on top of environment variables for appropriate values.)
```sh
cp .env.example .env
```

2. Start server locally
```sh
npm run dev
```

