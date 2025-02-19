class SpecialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `

        <div id = "headerplacement">
          
        <nav class="nav-area">
          <div id="topbanner"></div>
          
                    <div class="logoplacement">
                    <a href="home.html">
                        <input type="image" id="logo" src="logoupdated1.png" name="saveForm" class="btTxt submit" id="saveForm" />
                    </a>
                </div>
          
          
          <ul id = "navigationtings">
            
           
            
            <li class = "homebtn" id="r1">
              <a href="home.html">home</a>
            </li>
            
        
        
        
        
            <li class = "secondheaderbtn" id="r1s">
              
              <a href="#" style="border-bottom-left-radius: 0%; border-bottom-right-radius: 0%;">Cases by Topic ᵕ</a>
              <ul id = "casebytopiclayout">
                <li>
                  <a href="cardiohome.html" style="border-radius: 0%; border-radius: 0%;">Cardiology</a>
                  
                </li>
                <li>
                  <a href="#" style="border-radius: 0%;">Respiratory</a>
                </li>
        
                <li>
                  <a href="#" style="border-radius: 0%;">Gastro</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">Obs + Gynae</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">Paediatrics</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">ENT</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">Opthalm</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">Derm</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">Rheum</a>
                </li>
        
                <li>
                  <a href="#" style="border-radius: 0%;">Neurology</a>
        
                </li>
                
                <li>
                  <a href="#" style="border-radius: 0%;">Orthopaedics</a>
                </li>
        
              </ul>
            </li>
            
            <li class = "thirdheaderbtn" id="r1">
              <a href="#" >About us</a>
            </li>
            
        
            <li class = "fourthheaderbtn" id="r1">
              <a href="#" >Contact us</a>
            </li>
          
        
            
            
        
        
            <li class = "loginbtn">
              <a href="#" >Login</a>
            </li>
            
            <li class = "searchbtn">
              <a href="#" style="font-size: 30px; margin-top: -13px;" >⌕</a>
            </li>
        
            
            
            <li class="mobilenavarea"><a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
          </li>
        



        
            <div id="myLinks" style="display: none;">
    <a href="home.html">Home</a>
    <a href="#Aboutus">About</a>
    <a href="#Contactus">Contact us</a>
    <a href="homepage.html">Cases by topic ᵕ</a>
    
</div>
            
            
          </ul>
        </center>
        
        </div>
                <div id="bottombanner"></div>
        
        </nav>


        `
    }
}









class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `

        <footer>
        <p>AquaNora<br>
     <p>Email us at <a href="mailto:management@aquanora.org"  style="color: rgb(149, 234, 234); text-transform: lowercase;">management@aquanora.org</a></p></p>
     <p>WhatsApp text us on <a href="https://wa.me/447340552365" style="color: rgb(149, 234, 234); text-transform: lowercase;">07340552365</a></p>
 
     </footer>

        
        `
    }
}








customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)