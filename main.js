  //1 Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.
        // let num = promt("num = ")
        // if (num = 0) {
        //     alert(" 0 ")
        // }
        // else if (num > 0)
        // {
        //     alert(" polozhitelnoe");
        // }
        // else
        // {
        //     alert("otricatelnoe");
        // }
        //
        //2 Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
        //     let age = prompt("enter your age = ");
        //     if(age = 0)
        // {
        //     alert("your age not 0 ");
        // }
        // else if (age < 0)
        // {
        //     alert("your age not 0 ");
        // }
        // else if (age > 120)
        // {
        //     alert("your age not 120");
        // }

        //4 Запросить у пользователя время (часы, минуты, секунды)
        //и проверить корректность введенных данных
        //     let hour = prompt(" hour = ");
        //     let minut = prompt("mimut = ");
        //     let seconds = prompt("seconds = ");
        //     if(hour < 0)
        // {
        //     alert("hour not 0");
        // }
        // else if(hour > 24)
        // {
        //     alert("hour > 24");
        // }
        // else if (minut > 60)
        // {
        //     alert("minut > 60");
        // }
        // else if(minut < 0)
        // {
        //     alert("minut < 0");
        // }
        // else if(seconds > 60)
        // {
        //     alert("seconds > 60");
        // }
        // else if(seconds < 0)
        // {
        //     alert("seconds < 0");
        // }
        //Запросить у пользователя номер месяца и вывести на экран его название.

        let month = prompt("vvedi mesac");
        switch (month) {
       
            case '1':
                alert("januery")
                break;

            case '2':
                alert("fabruary")
                break; 
            case '3':
                alert("mart");
                break;
            case '4':
                alert("april");
                break; 
            case '5':
                alert("may");
                break; 
            case '6':
                alert("June");
                break; 
            case '7':
                alert("July");
                break; 
            case '8':
                alert("august");
                break; 
             case '9':
                alert("september");
                break; 
            case '10':
                alert("october");
                break; 
            case '11':
                alert("november");
                break; 
            case '12':
                alert("Decemer");
                break;
     if(month < 1)
        {
            alert("month < 1");
            break;
        }
        else if(month > 12)
        {alert("month> 12");

        }
        }
