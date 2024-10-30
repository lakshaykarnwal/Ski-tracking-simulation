# Michigan Ski Trail Tracker Simulator

##Live Link: https://lakshaykarnwal.github.io/Ski-tracking-simulation/

## Overview
The Michigan Ski Trail Tracker Simulator is an interactive web application that visualizes ski trails in Michigan using ArcGIS for JavaScript. It allows users to explore Michigan's ski trails, view detailed information about selected trails, and simulates movement along the longest trail.

## Data Source
The ski trail data used in this application is provided by the Michigan Department of Natural Resources. You can find the original dataset here:
[Michigan DNR Designated Ski Trails](https://gis-midnr.opendata.arcgis.com/datasets/michigan-dnr-designated-ski-trails/explore?location=43.455697%2C-85.199822%2C8.12)

We are grateful to the Michigan Department of Natural Resources for making this data publicly available.

## Features

### 1. Interactive Map
Explore Michigan's ski trails with a dynamic, zoomable map interface.

<img width="548" alt="Screenshot 2024-10-10 at 5 43 11 PM" src="https://github.com/user-attachments/assets/2fcfe15e-40ce-40dd-9a37-b1361ba82c13">


### 2. Trail Information
Click on any trail to view detailed information in a pop-up box.

<img width="358" alt="Screenshot 2024-10-10 at 5 42 54 PM" src="https://github.com/user-attachments/assets/c1dd4d92-7592-4e0e-b7e9-3181a53a4ba2">


### 3. Simulated Movement
Watch as the app animates movement along the longest trail in Michigan.

https://github.com/user-attachments/assets/595476f2-0f7b-4b6f-99de-50911633a418

### 4. Re-center Button
Quickly focus the map on the current simulated position.

<img width="173" alt="Screenshot 2024-10-10 at 5 42 33 PM" src="https://github.com/user-attachments/assets/286c6bda-d2bc-4c32-91d9-e243d0ee618e">


### 5. Responsive Design
Enjoy a seamless experience on various screen sizes.

<img width="461" alt="Screenshot 2024-10-10 at 5 42 19 PM" src="https://github.com/user-attachments/assets/f2530e24-e90d-4340-80b5-8e7491c53957">


## Tech Stack
- Vue.js
- ArcGIS for JavaScript
- Cypress (for testing)
- Docker (for containerization)

## Prerequisites
- Node.js (v14 or later)
- npm (comes with Node.js)
- Docker (for containerization)

## Setup and Installation

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/your-username/michigan-ski-trail-tracker.git
   cd michigan-ski-trail-tracker
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run serve
   ```

4. Open your browser and navigate to `http://localhost:8080`

### Running Tests

To run the Cypress tests:

```
npm run test
```

### Building for Production

To create a production build:

```
npm run build
```

### Docker Deployment

1. Build the Docker image:
   ```
   docker build -t michigan-ski-trail-tracker .
   ```

2. Run the Docker container:
   ```
   docker run -p 8081:8081 michigan-ski-trail-tracker
   ```

3. Access the application at `http://localhost:8081`

## Project Structure

- `src/components/ArcGISMap.vue`: Main component containing the map and trail visualization logic
- `cypress/integration/ArcGISMap.spec.js`: Cypress test file for the ArcGISMap component
- `Dockerfile`: Configuration for Docker containerization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

