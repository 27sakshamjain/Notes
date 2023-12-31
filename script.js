const addbtn=document.querySelector("#addbtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data=[];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )

    localStorage.setItem("notes",JSON.stringify(data))
}
addbtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)


const addNote = () => {
     const note=document.createElement("div");
     note.classList.add("note");
     note.innerHTML=`
     <div class="tool">
        <i class="save bi bi-save-fill"></i>
        <i class="trash bi bi-trash-fill"></i>
    </div>
    <textarea></textarea>`;
    
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )
    main.appendChild(note);
}