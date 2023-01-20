function preview() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("useremailid").value;
    var phone = document.getElementById("userphonenumber").value;
    var address = document.getElementById("useraddress").value;
    var gender = document.getElementsByName("Gender").value;
    var dob = document.getElementById("dob").value;
    var dept = document.getElementById("deptt").value;
    var sem = document.getElementById("semister").value;
    var feedback = document.getElementById("userfeedback").value;
    var rate = document.getElementById("rateing11").value;

    document.getElementById("feed-form").innerHTML = `  <form >
    <div class="fundiv">
        <fieldset>
            <legend>Pre-view Form</legend>
            <table class="funtable">
        <tr>
            <td> Name :</td>
            <td> ${name}</td>
        </tr>
        <tr>
            <td> Email :</td>
            <td>${email}</td>
        </tr>
        <tr>
            <td>Phone Number :</td>
            <td>${phone}</td>
        </tr>
        <tr>
            <td>Gender :</td>
            <td>${gender}</td>
        </tr>
        <tr>
            <td>Address : </td>
            <td>${address}</td>
        </tr>
        <tr>
            <td>Date of Brith :</td>
            <td> ${dob}</td>
        </tr>
        <tr>
            <td>Department : </td>
            <td>${dept}</td>
        </tr>
        <tr>
            <td>Semister : </td>
            <td>${sem}</td>
        </tr>
        <tr>
            <td> FeedBack : </td>
            <td>${feedback}</td>
        </tr>
        <tr>
            <td> Rateing :</td>
            <td>${rate}</td>
        </tr>
    </table>
        </fieldset>
        <button type="button" onclick="back()">Back</button>
    </div>
</form>`;
}


function back() {
    document.getElementById("feed-form").innerHTML = ` <hr>
    <form action="" class="feedbackform" id="feed-form">
        <fieldset class="firstfieldset">
            <legend class="personal">Personal Information</legend>
            <table class="personalinformation">
                <tr>
                    <td>Name :</td>
                    <td><input type="text" id="username" name="username" placeholder="Enter your full name" required>
                    </td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td><input type="email" id="useremailid" name="emailid" placeholder="Enter you email ID " required>
                    </td>
                </tr>
                <tr>
                    <td>Phone Number :</td>
                    <td><input type="tel" name="phone" id="userphonenumber" placeholder="Enter you phone number"
                            required>
                    </td>
                </tr>
                <tr>
                    <td>Gender :</td>
                    <td id="gendertd">
                        <input type="radio" name="Gender" value="Male" id="exampleInputGender" />
                        Male
                        <input type="radio" name="Gender" value="Female" id="exampleInputGender" />
                        Female
                        <input type="radio" name="Gender" value="Other" id="exampleInputGender" />
                        Other
                    </td>
                </tr>
                <tr>
                    <td><label for="address">Address :</label></td>
                    <td><textarea name="address1" id="useraddress" cols="30" rows="6"
                            placeholder="Enter your address "></textarea></td>
                </tr>
                <tr>
                    <td><label for="dob"> Date of Birth :</label></td>
                    <td><input type="date" id="dob" name="user_dob"></td>
                </tr>
            </table>
        </fieldset>
        <fieldset class="secondfieldset">
            <legend> Officeal Information</legend>
            <table class="officeal">
                <tr>
                    <td>Department :</td>
                    <td>
                        <Select id="deptt">
                            <option value="">Select Your Branch#</option>
                            <option value="COMPUTER SECIENCE">COMPUTER SECIENCE</option>
                            <option value="ELECTRONICS AND COMMUNICATION">ELECTRONICS AND COMMUNICATION</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="MECANICAL">MECANICAL</option>
                        </Select>
                    </td>
                </tr>
                <tr>
                    <td><label for="sem">Semister</label></td>
                    <td>
                        <select id="semister">
                            <option value="1st Semister">1st Semister</option>
                            <option value="2st Semister">2st Semister</option>
                            <option value="3st Semister">3st Semister</option>
                            <option value="4st Semister">4st Semister</option>
                            <option value="5st Semister">5st Semister</option>
                            <option value="6st Semister">6st Semister</option>
                        </select>
                    </td>
                </tr>
            </table>
        </fieldset>
        <fieldset class="thirdfieldset">
            <legend>Give Your Feedback Here</legend>
            <textarea name="feedback" id="userfeedback" cols="60" rows="15"
                placeholder="Enter your detail feedback here"></textarea><br>
            <div class="ratingvalue">
                <label for="rateing">Give your Rateing :</label>
                <input type="radio" name="rateing" value="⭐" id="rateing11" />1
                <input type="radio" name="rateing" value="⭐⭐" id="rateing11" />2
                <input type="radio" name="rateing" value="⭐⭐⭐" id="rateing11" />3
                <input type="radio" name="rateing" value="⭐⭐⭐⭐" id="rateing11" />4
                <input type="radio" name="rateing" value="⭐⭐⭐⭐⭐" id="rateing11" />5
            </div>
        </fieldset>


        <div class="div1">
            <table>
                <tr>
                    <td>
                        <button type="button" class="preview" onclick="preview()"> Pre-view</button>
                    </td>
                    <td>
                        <button type="submit" class="submit"> Submit</button>
                    </td>
                </tr>
            </table>
        </div>
    </form>

    <script src="function.js"></script> `

}
