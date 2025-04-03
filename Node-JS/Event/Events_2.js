// Write a node js script to write the text “This is data” to new.txt file. After that append the 
// text “That is data” to same new.txt file. After that read the file and print file contents on 
// console. After finishing read operation , print the line “Thanks for using my program” on 
// console. write ,append,read sequence must be maintain. all read ,write operations are 
// asynchronous. Use event handling.
const fs = require('fs');
const EventEmitter = require('events');

const ee = new EventEmitter();
const filePath = 'new.txt';

// Event: Write data to file
ee.on('writeFile', (data) => {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data written to file.');
      ee.emit('appendFile', 'Hello World!!');
    }
  });
});

// Event: Append data to file
ee.on('appendFile', (data) => {
  fs.appendFile(filePath, '\n' + data, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
    } else {
      console.log('Data appended to file.');
      ee.emit('readFile');
    }
  });
});

// Event: Read data from file
ee.on('readFile', () => {
  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File contents:\n', fileData);
      ee.emit('finish');
    }
  });
});

// Event: Finish operation
ee.on('finish', () => {
  console.log('Thanks for using my program');
});

// Start the sequence
ee.emit('writeFile', 'This is data');
