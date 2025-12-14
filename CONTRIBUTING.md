# Contributing to Tuncxys DatePicker

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Tuncxys DatePicker. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## 🛠 How Can I Contribute?

### 1. Reporting Bugs
This section guides you through submitting a bug report.
* **Check existing issues:** Before creating a new issue, please check if the problem has already been reported.
* **Use the Template:** When opening a new issue, please use the **Bug Report** template provided. It helps us understand the problem faster.
* **Be specific:** Include browser version, steps to reproduce, and screenshots if possible.

### 2. Suggesting Enhancements
* **Use the Template:** Please use the **Feature Request** template.
* **Explain the "Why":** Describe why this feature would be useful to most users.

### 3. Pull Requests (Code Contributions)
We love Pull Requests! Here's a quick guide:

1.  **Fork the repository** and clone it locally.
2.  **Create a branch** for your edit:
    ```bash
    git checkout -b feature/amazing-feature
    ```

    or

    ```bash
    git checkout -b fix/annoying-bug
    ```
3.  **Make your changes.** Keep your code clean and readable.
4.  **Test your changes.** Since this is a visual component, please verify it works on major browsers (Chrome, Firefox, Safari).
5.  **Commit your changes** with meaningful commit messages:
    ```bash
    git commit -m "Fix: Calendar positioning issue on mobile"
    ```
6.  **Push to your fork** and submit a Pull Request.

## 💻 Development Setup

To set up the project locally, follow these steps:

**Prerequisites:** Node.js (Latest LTS version recommended).

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/Tuncxy/tuncxys-datepicker.git](https://github.com/Tuncxy/tuncxys-datepicker.git)
    cd tuncxys-datepicker
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will start a local server (usually at `http://localhost:5173`) where you can see your changes instantly.

4.  **Build for production:**
    Before submitting a PR, make sure the project builds without errors:
    ```bash
    npm run build
    ```

## 🚫 Coding Guidelines

* **No Dependencies:** This project aims to be lightweight. **Do not add** jQuery, Lodash, or any other heavy libraries.
* **Vanilla JS:** We use pure JavaScript (ES6+).
* **Formatting:** Try to keep the code style consistent with the existing codebase.

## 📄 License

By contributing, you agree that your contributions will be licensed under its MIT License.

---
*Happy Coding!* 🚀