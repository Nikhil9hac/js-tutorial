class Library{
    constructor(author,book,type){
        this.author=author;
        this.book=book;
        this.type=type;
    }
    displayInsert(){
        let tbody=document.getElementById('tbody1')
        let uistring1;
        uistring1=`<tr>
        <td>${this.author}</td>
        <td>${this.book}</td>
        <td>${this.type}</td>
    </tr>`
    tbody.innerHTML+=uistring1;
    }
    displayShow(color,mes){
        let message=document.getElementById('message');
       message.innerHTML=`<div class="alert alert-${color} alert-dismissible fade show" role="alert">
       <strong>Message</strong> ${mes}
       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>
     `
      setTimeout(() => {
          message.innerHTML='';
      }, 2000);
    }
    displayValid(){
        if(this.book.length<=2 || this.author<=2){
            return false;
        }
        else{
            return true;
        }
    }
    displayClear(){
        let author=document.getElementById('author');
        let book=document.getElementById('book');
        author.value="";
        book.value  ="";
    }
}
let submit=document.getElementById('submit');
submit.addEventListener('click',function(e){
    let author=document.getElementById('author').value;
    let book=document.getElementById('book').value;
    let type;
    let manga=document.getElementById('gridRadios1');
    let programming=document.getElementById("gridRadios2");
    let fiction=document.getElementById("gridRadios3");
    if(manga.checked){
        type=manga.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else if(fiction.checked){
        type=fiction.value;
    }
    Libraryform=new Library(author,book,type);
    let result=Libraryform.displayValid();
    if(result==false){
        Libraryform.displayShow("danger",'Sorry you cannot add this book');
    }
    else{
        Libraryform.displayInsert();
        Libraryform.displayShow('success','Your book has been successfully added');
        Libraryform.displayClear();
    }
})