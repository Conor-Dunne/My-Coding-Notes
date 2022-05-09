const container = document.querySelector(".container");




let notes = [
    {
        title: "Array.filter",
        summary: "Filter an array for elements that pass a test (from a function)",
        points: ["this is point one", "point two"],
        code: {
            line1: "const ages = [10,15,67,40,23];",
            line2: "ages.filter(age => age =<15);",
            line3: "result: [15,67,40,23]",
        },
    },
    {
        title: "Array.map",
        summary: "Runs a function on each element of array and returns the result in a new array",
        points: ["this is point one", "point two"],
        code: {
            line1: "const array1 = [1, 4, 9, 16];",
            line2: "const map1 = array1.map(x => x * 2);",
            line3: "result: [2, 8, 18, 32]",
        },
    },
    {
        title: "Array.sort",
        summary: "Sort an array by Unicode (!important)",
        points: ["this is point one", "point two"],
        code: {
            line1: "TO SORT AN ARRAY IN ALPHABETICAL ORDER:",
            line2: "const months = ['March', 'Jan', 'Feb', 'Dec'];",
            line3: "months.sort();",
            line4: "result: ['Dec', 'Feb', 'Jan', 'March']",
            line5: "--------------------------",
            line7: "TO SORT IN NUMERICAL ORDER:",
            line8: "const numbers = [4, 2, 5, 1, 3];",
            line9: "numbers.sort(function(a, b) {return a - b;});",
            line10: "result: [1, 2, 3, 4, 5]",
        },
    }

]

const noteMaker = function (obj) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    const noteTitle = document.createElement("div");
    noteTitle.classList.add("note-title")
    const h2 = document.createElement("h2");
    h2.textContent = obj.title;
    noteTitle.appendChild(h2);
    noteDiv.appendChild(noteTitle);
    const summary = document.createElement("div");
    summary.classList.add("note-summary");
    const p = document.createElement("p");
    p.textContent = obj.summary;
    summary.appendChild(p);
    noteDiv.appendChild(summary);
    const codeBox = document.createElement("div");
    codeBox.classList.add("code-box");

    for (let key in obj.code) {
        console.log(obj.code[key])
        const br = document.createElement("br");
        const codeText = document.createElement("code");
        codeText.classList.add("code");
        codeText.textContent = obj.code[key];
        codeBox.appendChild(codeText);
        noteDiv.appendChild(codeBox);

    }

    
    container.appendChild(noteDiv);
    //should create loop or map to insert code lines

}


notes.map(noteMaker);
console.log(notes[0].code.length);


/*1. create div with class "note";
2. insert "note-title" div with title;
3. insert "code-box" div" -> insert the seperat line of code (target code has special class)
*/


