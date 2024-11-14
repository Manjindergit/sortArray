# Sorting Algorithm in Node.js

This project demonstrates a custom sorting algorithm implemented in Node.js. The algorithm sorts both integers and strings without using JavaScript's built-in `.sort()` method.

## Features

1. **Integer Sorting**: Uses a Bubble Sort algorithm to sort an array of integers in ascending order.
2. **String Sorting**: Uses a Bubble Sort algorithm to sort an array of strings in alphabetical order.

## Project Structure

```
project-folder/
├── index.js                  # Main entry point
├── algorithms/
│   └── sorting.js            # Contains sorting algorithms
└── package.json
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone this repository:
   ```bash
   git clone git@github.com:Manjindergit/sortArray.git
   ```
2. Navigate to the project folder:
   ```bash
   cd sortArray
   ```
3. Install dependencies (optional):
   ```bash
   npm install
   ```

## Usage

1. Run the sorting algorithm by executing:
   ```bash
   node index.js
   ```
2. You should see sorted arrays printed in the console.

## Testing

Basic tests can be set up using Jest. To install Jest and run tests:

1. Install Jest:
   ```bash
   npm install --save-dev jest
   ```
2. Run tests:
   ```bash
   npm test
   ```

## Example Output

```
Sorted Integers: [5, 7, 23, 32, 34, 62]
Sorted Strings: [ "apple", "banana", "cherry" ]
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
