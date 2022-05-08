const container = document.querySelector(".container");




let notes = [
    {
        title: "Array.filter",
        summary: "Filter an array for elements that pass a test",
        points: ["this is point one", "point two"],
        code: {
            line1: "Aconst ages = [10,15,67,40,23];",
            line2: "ages.filter(age => age =<15);",
            line3: "result: [15,67,40,23]",
        },
    },
    {
        title: "Array.map",
        summary: "Runs a function on each element of array and returns the result in a new array",
        points: ["this is point one", "point two"],
        code: {
            line1: "Bconst ages = [10,15,67,40,23];",
            line2: "ages.filter(age => age =<15);",
            line3: "result: [15,67,40,23]",
        },
    },
    {
        title: "Array.filter3",
        summary: "Filter an array for elements that pass a test",
        points: ["this is point one", "point two"],
        code: {
            line1: "Cconst ages = [10,15,67,40,23];",
            line2: "ages.filter(age => age =<15);",
            line3: "result: [15,67,40,23]",
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


