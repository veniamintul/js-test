const openButton = document.querySelector("#openOverlay"); //1.нашли елемент по айди 

const body=document.body;   // 5.добавили добавленный див в боди

openButton.addEventListener("click",function(event){        //2.нашди кнопку и навесили на нее действие клик
    const overlayElement=document.createElement("div");      //3. создали тег див затемнение
    overlayElement.classList.add("overlay");   //4. Навесили класс на добавленный див.Класс пишется без точки!!!


    ////////

    overlayElement.addEventListener("click",function(event){  //навесили на 4 событие клик
       // body.removeChild(overlayElement); //20.удаление
       if(event.target===overlayElement){   // свойство таргет указывает на фактический блок срабатывания события
       closeElement.click()
      }
      });
   



    
    const contentElement=document.createElement("div");//9.создали див под контент
    contentElement.classList.add("content"); //10 навесили тег на контент

    contentElement.innerHTML="Hello word!";  //12.написание текста


    const closeElement=document.createElement("a"); //13 создали ссылку на крестик
    closeElement.classList.add("close");  //14 навесили класс на крестик

    
    closeElement.textContent="x"; // 15. добавили содержание в 13 пункт
    closeElement.href="#"; //16. Сделали ссылку 13 интерактивной


   //////////////  работаем с закрыванием

   closeElement.addEventListener("click",function(event){  //навесили на 13 событие клик
     event.preventDefault()     //19.Запретили ссылке перезагружать страницу
     body.removeChild(overlayElement); //20.удаление
   });








////////////////////////////////


    const containerElement=document.createElement("div");  //6.Создали блок для надписи
    containerElement.classList.add("modal-container");    //7.навесили класс на пункт 6






    overlayElement.appendChild(containerElement);   //8.добавили пункт 6 в пункт 3
    containerElement.appendChild(closeElement); //17 добавили пункт 13 в 6
    containerElement.appendChild(contentElement);  //11. положили контент в блок 6
    body.appendChild(overlayElement);  //5.продолжение 5 пункта
})