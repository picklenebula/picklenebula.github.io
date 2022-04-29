        //Get the button
        var mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function copyFunction() {
            navigator.clipboard.writeText("pixie#1984");
            document.getElementById('copybutton').textContent = "copied!";
        }

        // functions to show/hide different image galleries
        function showArt() {
            containerArt.style.display = 'block'
            containerFood.style.display = 'none'
            containerPics.style.display = 'none'
            document.getElementById('artBtn').textContent = '>ART<'
            document.getElementById('foodBtn').textContent = 'FOOD'
            document.getElementById('picsBtn').textContent = 'PICS'
            document.getElementById('artBtn').style.backgroundColor = '#c2902e'
            document.getElementById('foodBtn').style.backgroundColor = '#a07a2e'
            document.getElementById('picsBtn').style.backgroundColor = '#a07a2e'
        }

        function showFood() {
            containerArt.style.display = 'none'
            containerFood.style.display = 'block'
            containerPics.style.display = 'none'
            document.getElementById('artBtn').textContent = 'ART'
            document.getElementById('foodBtn').textContent = '>FOOD<'
            document.getElementById('picsBtn').textContent = 'PICS'
            document.getElementById('artBtn').style.backgroundColor = '#a07a2e'
            document.getElementById('foodBtn').style.backgroundColor = '#c2902e'
            document.getElementById('picsBtn').style.backgroundColor = '#a07a2e'
        }

        function showPics() {
            containerArt.style.display = 'none'
            containerFood.style.display = 'none'
            containerPics.style.display = 'block'
            document.getElementById('artBtn').textContent = 'ART'
            document.getElementById('foodBtn').textContent = 'FOOD'
            document.getElementById('picsBtn').textContent = '>PICS<'
            document.getElementById('artBtn').style.backgroundColor = '#a07a2e'
            document.getElementById('foodBtn').style.backgroundColor = '#a07a2e'
            document.getElementById('picsBtn').style.backgroundColor = '#c2902e'
        }