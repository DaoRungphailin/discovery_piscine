/*slide img*/
var i = 0;
            function slideImage() {
                var img = new Array();
                img[0] = "https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.6435-9/60891164_2505909976302823_2167473847429758976_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=cwMTJHrEC6IAX_XcO3E&_nc_ht=scontent.fbkk7-3.fna&oh=00_AT-qqOfs93s8gfJOtVvb5tZRmidTRBQ1Ivwgg0iNrETAeA&oe=6343E1AC" ;
                img[1] = "https://cdn.discordapp.com/attachments/887344508726022164/1019137637627478016/E5840E6C-AF1D-410B-9212-A64EC63FD012.jpg" ;
                img[2] = "https://cdn.discordapp.com/attachments/887344508726022164/1019137725791735839/04E9832E-7740-4FB0-AB08-736E50CBEBC0.jpg";

                var slide = document.getElementById("imgeslide");
                slide.src = img[i];

                var delayTime = setTimeout("slideImage()", 2000);

                i = i + 1;
                if (i >= 3) {
                    i = 0;
                }
            };
            function clickme(){
                alert("Nice to meet U >-<")
            }

        






