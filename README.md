# **Lanchonete API**

The Lanchonete API is a backend application that serves as a menu for a snack bar. It allows you to perform CRUD (Create, Read, Update, Delete) operations on snack items. Each snack item consists of a title, price, and image.

The API has been developed using the Yarn package manager and implements the following routes:

* __``GET /snacks - Retrieves a list of all snack items.``__
* __``GET /snack/:id' - Retrieves a specific snack item by its ID.``__
* __``POST /snack - Creates a new snack item.``__
* __``PUT /snack/:id - Updates an existing snack item by its ID, allowing changes to the title, price, and image.``__
* __``DELETE /snack/:id - Deletes a snack item by its ID.``__

## **Installation**
1. Clone the repository: git clone https://github.com/luiabdiel/lanchoneteApp-B.git
2. Navigate to the project directory: cd lanchoneteApp-B
3. Install dependencies: __``yarn``__

## **Usage**
1. Start the server: __``yarn dev``__
2. Access the API endpoints using a tool such as Postman/Insomnia or URL.

## **Contributing**
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## **License**
This project is licensed under the __MIT License.__
