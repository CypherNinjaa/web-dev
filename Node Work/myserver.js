var http = require("http"); //here http is the module for creating http based applns.
var server = http.createServer(function (_req, resp) {
	resp.writeHead(200, { "Content-Type": "text/html" });
	// resp.write(
	// 	'<h2 align="center" style="color:yellow">Working with node js</h2>' 
	// );
	resp.write(`
        <h2 align="center" style="color:yellow">Working with node js</h2>
        <hr>
           <table width="70%" align="center">
        <tr>
            <td>
                <fieldset width="70%">
                    <legend align="center">Registration From</legend>
                    <form action="./register.html" method="post">
                        <table align="center" border="0">
                            <tr>
                                <td>Enter Full Name:</td>
                                <td><input type="text" name="name"></td>
                            </tr>
                            <tr>
                                <td>Enter Email:</td>
                                <td><input type="email" name="email"></td>
                            </tr>
                            <tr>
                                <td>Password: </td>
                                <td><input type="password" name="password" id=""></td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td>Male <input type="radio" name="gender" value="male" checked>
                                    Female <input type="radio" name="gender" value="Female">
                                </td>
                            </tr>
                            <tr>
                                <td>Hobbies:</td>
                                <td><input type="checkbox" name="hobbies[]" value="1">Coding
                                    <input type="checkbox" name="hobbies[]" value="2">Cooking
                                    <input type="checkbox" name="hobbies[]" value="3">Gaming
                                    <input type="checkbox" name="hobbies[]" value="4">Sports
                                </td>
                            </tr>
                            <tr>
                                <td>City:</td>
                                <td>
                                    <select name="ddlcity" id="">
                                        <option disabled selected>--Choose City--</option>
                                        <optgroup label="Bihar">
                                            <option value="1">Patna</option>
                                            <option value="2" selected>Darbhanga</option>
                                            <option value="3">Samastipur</option>
                                        </optgroup>
                                        <optgroup label="Other">
                                            <option value="4">Jaipur</option>
                                            <option value="5">Delhi</option>
                                            <option value="6">Mumbai</option>
                                            <option value="7">Indore</option>
                                        </optgroup>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <!-- list box -->
                                <td>Prefered Job City:</td>
                                <td>
                                    <select name="ddljobcity" id="" multiple>
                                        <!-- <option disabled selected>--Choose City--</option> -->
                                        <optgroup label="Bihar">
                                            <option value="1">Patna</option>
                                            <option value="2" selected>Darbhanga</option>
                                            <option value="3">Samastipur</option>
                                        </optgroup>
                                        <optgroup label="Other">
                                            <option value="4">Jaipur</option>
                                            <option value="5">Delhi</option>
                                            <option value="6">Mumbai</option>
                                            <option value="7">Indore</option>
                                        </optgroup>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td><textarea name="Address" id="" rows="4" cols="20"></textarea></td>
                            </tr>
                            <tr>
                                <td>DOB:</td>
                                <td><input type="date" name="DOB" id="" min="1985-01-01" max="2007-01-01"></td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td><input name="Age" type="number" min="16" max="100" step="4"></td>
                            </tr>
                            <tr>
                                <td>Expected Salary:</td>
                                <td><input name="salary" type="range" min="15000" max="1000000" step="4" value="0"></td>
                            </tr>
                            <tr>
                                <td>Upload profile Picture: </td>
                                <td><input type="file" name="" id="" accept="images/*" multiple></td>
                            </tr>
                            <tr>
                                <td><input id="Terms" type="checkbox" />
                                    <label for="Terms">Terms & Condition</label><br />
                                </td>
                            </tr>
                            <tr>
                                <td><Input type="submit" name="btnsubmit" value="Register Me"></Input></td>
                            </tr>
                        </table>
                    </form>
                </fieldset>
            </td>
        </tr>
    </table>
        `);
	//resp.write("<hr>");
	resp.end();
});
server.listen(8085, () => {
	console.log("Server Running At 8085");
});
