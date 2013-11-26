var step_back = function(){};

function show_home_screen() {
	$('#app-content').html('');
	$('#app-content').hide();
	$('#top-back').hide();
	$('#app-index').show();
}

function show_next_assignment() {
	$('#app-index').hide();
	$('#app-content').show();
	$('#top-back').show();
	var content = "";

	content += '<p class="lead my-title">Next Assignments</p>';
	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Vesel: <span class='label label-info'>Erika Schulte</span> </p></div>";
	content += "<div><p class='navbar-text'>Date: <span class='label label-info'>Jan-5-2014</span></p></div>";
	content += "<div><p class='navbar-text'>Assignemnt Type: <span class='label label-inverse'>Dry Dock</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Vessel: <span class='label label-info'>Angelina Schulte</span></p></div>";
	content += "<div><p class='navbar-text'>Date: <span class='label label-info'>Feb-10-2014</span></p></div>";
	content += "<div><p class='navbar-text'>Assignemnt Type: <span class='label label-inverse'>Audit</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Vessel: <span class='label label-info'>Algoma Hansa</span></p></div>";
	content += "<div><p class='navbar-text'>Date: <span class='label label-info'>April-9-2014</span></p></div>";
	content += "<div><p class='navbar-text'>Assignemnt Type: <span class='label label-important'>Assigned to you</span></p></div>";
	content += "</div>";
	$('#app-content').html(content);
	step_back = show_home_screen;
}

function show_my_itineraries() {
	$('#app-index').hide();
	$('#app-content').show();
	$('#top-back').show();
	var content = "";

	content += '<p class="lead my-title">My Itineraries</p>';
	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Flight Number: <span class='label label-info'>EKJ7352</span></p></div>";
	content += "<div><p class='navbar-text'>Booking Id: <span class='label label-info'>EO73891234241</span></p></div>";
	content += "<div><p class='navbar-text'>Journey: <span class='label label-info'>Cohin</span> to <span class='label label-info'>Chennai</span></p></div>";
	content += "<div><p class='navbar-text'>Dates: <span class='label label-info'>Jan-5-2014</span> to <span class='label label-info'>Feb-7-2014</span></p></div>";
	content += "<div><p class='navbar-text'>Type: <span class='label label-inverse'>Flight</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Vessel: <span class='label label-info'>Angelina Schulte</span></p></div>";
	content += "<div><p class='navbar-text'>Journey: <span class='label label-info'>Chennai</span> To <span class='label label-info'>Hamburg</span></p></div>";
	content += "<div><p class='navbar-text'>Journey Dates: <span class='label label-info'>Feb-10-2014</span> to <span class='label label-info'>April-7-2014</span></p></div>";
	content += "<div><p class='navbar-text'>Type: <span class='label label-success'>Voyage</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Hotel: <span class='label label-info'>Holiday Inn</span></p></div>";
	content += "<div><p class='navbar-text'>Booking Id: <span class='label label-info'>E732962</span></p></div>";
	content += "<div><p class='navbar-text'>Reservation Dates: <span class='label label-info'>April-9-2014</span> to <span class='label label-info'>April-12-2014</span></p></div>";
	content += "<div><p class='navbar-text'>Type: <span class='label label-important'>Hotel</span></p></div>";
	content += "</div>";
	$('#app-content').html(content);
	step_back = show_home_screen;
}

function show_vessel_tracker() {
	$('#app-index').hide();
	$('#app-content').show();
	$('#top-back').show();
	var content = "";

	content += '<p class="lead my-title">Vessel Tracker</p>';
	content += "<div class='assignment-details'>";
	
	content += '<div class="controls"> \
                  <input type="text" id="inputEmail" value="Algoma Hansa"> \
               </div> ';

	content += "<div><p class='navbar-text'>Lat, Long: <span class='label label-info'>5.01, 0.01</span> (2013-11-06 04:39:01)</p></div>";
	content += "<div><p class='navbar-text'>Speed, Course: <span class='label label-info'>0.54 Knots, 55.0 Degrees</span></p></div>";
	content += "<div><p class='navbar-text'>Wind: <span class='label label-success'>6.1 Knots, 117 Degrees</span></p></div>";
	content += "<div><p class='navbar-text'>Pressure: <span class='label label-success'>1009 mbar</span></p></div>";
	content += "<div><p class='navbar-text'>Wind Wave: <span class='label label-success'>0.1 metres, 1.7 seconds</span></p></div>";
	content += "<div><p class='navbar-text'>Swell Wave: <span class='label label-important'>15.9 metres, 7.6 seconds, 196 degrees</span></p></div>";
	
	content += "<div><p class='navbar-text'>Last and Next Port Calls:</p></div>";
	content += "<div><p class='navbar-text'><span class='label label-success'>Brighton, UK at November-6-2014 06:45AM</span></p></div>";
	content += "<div><p class='navbar-text'><span class='label label-success'>Freetown, Sierra Leone at November-16-2014 9:23AM</span></p></div>";
	content += "<div><p class='navbar-text'><span class='label label-info'>Lagos, Ghana at November-22-2014 8:17PM</span></p></div>";
	content += "<div><p class='navbar-text'><span class='label label-info'>Port Nolloth, Namibia at November-28-2014 3:35AM</span></p></div>";
	content += "<div><p class='navbar-text'><span class='label label-info'>Cape Town, South Africa at December-4-2014 7:45PM</span> (Destination)</p></div>";
	content += "</div>";
	$('#app-content').html(content);
	step_back = show_home_screen;
}


function show_crew_list() {
	$('#app-index').hide();
	$('#app-content').show();
	$('#top-back').show();
	var content = "";

	content += '<p class="lead my-title">Crew List</p>';
	content += "<div class='assignment-details'>";
	
	content += '<div class="controls"> \
                  <input type="text" id="inputEmail" value="Algoma Hansa"> \
               </div> ';

    content += '<div class="ui-collapsible-content" aria-hidden="false"> \
    				<div><span>Master : </span><span class="label label-info">Arif  Manirovichkuchaev (Russian Federation)<img></span></div> \
    				<div><span>2nd Officer : </span><span class="label label-info">Romny  Rolandoromero (Venezuela)<img></span></div> \
    				<div><span>3rd Officer : </span><span class="label label-info">Giorgi Gogadze (Georgia)<img></span></div> \
    				<div><span>Chief Engineer : </span><span class="label label-info">Mamuka Tetemadze (Georgia)<img></span></div> \
    				<div><span>2nd Engineer : </span><span class="label label-info">Eduard  Vladimirbelov (Russian Federation)<img></span></div> \
    				<div><span>Junior Engineer : </span><span class="label label-info">Edward Cujerean (Romania)<img></span></div> \
    				<div><span>Electrician : </span><span class="label label-info">James  Mesababatido (Philippines)<img></span></div> \
    				<div><span>Pumpman : </span><span class="label label-info">Joel  Aldaymagsombol (Philippines)<img></span></div> \
    				<div><span>Able Bodied Seaman : </span><span class="label label-info">Generoso  Brianescano (Philippines)<img></span></div> \
    				<div><span>Os-messman : </span><span class="label label-info">Ezrael  Verinosantiago (Philippines)<img></span></div> \
    				<div><span>Fitter : </span><span class="label label-info">Jim  Estebantaboy (Philippines)<img></span></div> \
    				<div><span>Motorman : </span><span class="label label-info">John Rey  Lapaggancero (Philippines)<img></span></div> \
    				<div><span>Chief Cook : </span><span class="label label-info">Nelson  Pascuatiburcio (Philippines)<img></span></div> \
    			</div>';
    
    $('#app-content').html(content);
	step_back = show_home_screen;
}


function show_vessel_wiki() {
	$('#app-index').hide();
	$('#app-content').show();
	$('#top-back').show();
	var content = "";

	content += '<p class="lead my-title">Vessel Wiki</p>';
	content += "<div class='assignment-details'>";
	
	content += '<div class="controls"> \
                  <input type="text" id="inputEmail" value="Algoma Hansa"> \
               </div> ';

    content += '<div class="ui-collapsible-content" aria-hidden="false">\
    				<div><span>Vessel Type : </span><span class="label label-info">Chemical Tanker (Chemical Tanker Type-2)<img></span></div> \
    				<div><span>Maiden Name : </span><span class="label label-info">Amalienborg<img></span></div> \
    				<div><span>Flag : </span><span class="label label-info">Bahamas<img></span></div> \
    				<div><span>Registered Owner : </span><span class="label label-info">Algoma Tankers International Inc.<img></span></div> \
    				<div><span>Ultimate Owner : </span><span class="label label-info">Algoma Tankers Limited<img></span></div> \
    				<div><span>Management Type : </span><span class="label label-info">Full Management- )<img></span></div> \
					<div><span>Class Type, Number : </span><span class="label label-info">Lloyds Register, BAS0900283<img></span></div> \
					<div><span>Built On : </span><span class="label label-info">1998-03-01<img></span></div> \
					<div><span>YARD : </span><span class="label label-info">Alabama Shipyard Inc.	<img></span></div> \
					<div><span>Hull Number : </span><span class="label label-info">46<img></span></div> \
					<div><span>Length x Breadth : </span><span class="label label-info">144.050 x 23.000<img></span></div> \
					<div><span>Depth : </span><span class="label label-info">12.400<img></span></div> \
					<div><span>MMSI : </span><span class="label label-info">311010700<img></span></div> \
					<div><span>IMO : </span><span class="label label-info">9127186<img></span></div> \
					<div><span>Dead Weight : </span><span class="label label-info">16775<img></span></div> \
					<div><span>Gross Tonnage : </span><span class="label label-info">11290<img></span></div> \
					<div><span>Call sign : </span><span class="label label-info">C6X16<img></span></div> \
					<div><span>Main Engine : </span><span class="label label-info">WARTSILA (1)<img></span></div> \
					<div><span>Main Engine KW : </span><span class="label label-info">4800<img></span></div> \
					<div><span>Phone : </span><span class="label label-info">870773135654<img></span></div> \
					<div><span>Email : </span><span class="label label-info">algoma.hansa@bs-fleetmail.com<img></span></div> \
					<div><span>CSO1 : </span><span class="label label-info">Dimitris Pavlou (+35799477777)<img></span></div> \
					<div><span>CSO2 : </span><span class="label label-info">Nicholas Rich (+35799490000)</span></div> \
				</div>';
	$('#app-content').html(content);
	step_back = show_home_screen;
}

function show_vessel_tracker() {
	$('#app-index').hide();
	$('#app-content').show();
	$('#top-back').show();
	var content = "";

	content += '<p class="lead my-title">Vessel Tracker</p>';
	content += "<div class='assignment-details'>";
	
	content += '<div class="controls"> \
                  <input type="text" id="inputEmail" value="Algoma Hansa"> \
               </div> ';

	content += "<div><p class='navbar-text'>Lat, Long: <span class='label label-info'>5.01, 0.01</span> (2013-11-06 04:39:01)</p></div>";
	content += "<div><p class='navbar-text'>Speed, Course: <span class='label label-info'>0.54 Knots, 55.0 Degrees</span></p></div>";
	content += "<div><p class='navbar-text'>Wind: <span class='label label-success'>6.1 Knots, 117 Degrees</span></p></div>";
	content += "<div><p class='navbar-text'>Pressure: <span class='label label-success'>1009 mbar</span></p></div>";
	content += "<div><p class='navbar-text'>Wind Wave: <span class='label label-success'>0.1 metres, 1.7 seconds</span></p></div>";
	content += "<div><p class='navbar-text'>Swell Wave: <span class='label label-important'>15.9 metres, 7.6 seconds, 196 degrees</span></p></div>";
	
	content += "<div><p class='navbar-text'>Last and Next Port Calls:</p></div>";
	content += "<div><p class='navbar-text'><span class='label label-success'>Brighton, UK at November-6-2014 06:45AM</span></p></div>";
	content += "<div><p class='navbar-text'><span class='label label-success'>Freetown, Sierra Leone at November-16-2014 9:23AM</span></p></div>";
	content += "<div><p class='navbar-text'><span class='label label-info'>Lagos, Ghana at November-22-2014 8:17PM</span></p></div>";
	content += "<div><p class='navbar-text'><span class='label label-info'>Port Nolloth, Namibia at November-28-2014 3:35AM</span></p></div>";
	content += "<div><p class='navbar-text'><span class='label label-info'>Cape Town, South Africa at December-4-2014 7:45PM</span> (Destination)</p></div>";
	content += "</div>";
	$('#app-content').html(content);
	step_back = show_home_screen;
}

function show_logistics_tracker() {
	// $('#app-index').hide();
	// $('#app-content').show();
	// $('#top-back').show();
	// var content = "";

	// content += '<p class="lead my-title">P.O. Pending Delivery</p>';
	// content += "<div class='assignment-details'>";
	
	// content += '<div class="controls"> \
 //                  <input type="text" id="inputEmail" value="Algoma Hansa"> \
 //               </div> ';

	// content += "<div><p class='navbar-text'>Lat, Long: <span class='label label-info'>5.01, 0.01</span> (2013-11-06 04:39:01)</p></div>";
	// content += "<div><p class='navbar-text'>Speed, Course: <span class='label label-info'>0.54 Knots, 55.0 Degrees</span></p></div>";
	// content += "<div><p class='navbar-text'>Last and Next Port Calls:</p></div>";
	// content += "<div><p class='navbar-text'><span class='label label-success'>Brighton, UK at November-6-2014 06:45AM</span></p></div>";
	// content += "<div><p class='navbar-text'><span class='label label-success'>Freetown, Sierra Leone at November-16-2014 9:23AM</span></p></div>";
	// content += "<div><p class='navbar-text'><span class='label label-info'>Lagos, Ghana at November-22-2014 8:17PM</span></p></div>";
	// content += "<div><p class='navbar-text'><span class='label label-info'>Port Nolloth, Namibia at November-28-2014 3:35AM</span></p></div>";
	// content += "<div><p class='navbar-text'><span class='label label-info'>Cape Town, South Africa at December-4-2014 7:45PM</span> (Destination)</p></div>";
	// content += "</div>";
	// $('#app-content').html(content);
	// step_back = show_home_screen;
}


function show_budget_tracker() {
	$('#app-index').hide();
	$('#app-content').show();
	$('#top-back').show();
	var content = "";

	content += '<p class="lead my-title">My Vessel Budgets</p>';
	
	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Vessel: <span class='label label-info'>Algoma Hansa</span></p></div>";
	content += "<div><p class='navbar-text'>Budget Spent: <span class='label label-success'>40% - $28,000 / $70,000 (24/12/2013) </span></p></div>";
	content += '<div class="progress progress-success"><div class="bar" style="width: 40%"></div></div>';
	content += "<div><p class='navbar-text'></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Vessel: <span class='label label-info'>Erika Schulte</span></p></div>";
	content += "<div><p class='navbar-text'>Budget Spent: <span class='label label-important'>97% - $68,000 / $70,000 (24/12/2013) </span></p></div>";
	content += '<div class="progress progress-danger"><div class="bar" style="width: 97%%"></div></div>';
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Vessel: <span class='label label-info'>Trust Agility</span></p></div>";
	content += "<div><p class='navbar-text'>Budget Spent: <span class='label label-warning'>54% - $38,000 / $70,000 (24/12/2013) </span></p></div>";
	content += '<div class="progress progress-warning"><div class="bar" style="width: 54%"></div></div>';
	content += "</div>";
	
	$('#app-content').html(content);
	step_back = show_home_screen;
}

function show_my_accounts() {
	$('#app-index').hide();
	$('#app-content').show();
	$('#top-back').show();
	var content = "";

	content += '<p class="lead my-title">My Accounts</p>';

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Payments This Month: <span class='label label-success'>USD 12,100</span></p></div>";
	content += "<div><p class='navbar-text'>Payments Due: <span class='label label-inverse'>USD 5,400</span></p></div>";
	content += "</div>";


	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Amount: <span class='label label-info'>USD 4,300</span></p></div>";
	content += "<div><p class='navbar-text'>Vessel: <span class='label label-info'>Angelina Schulte</span></p></div>";
	content += "<div><p class='navbar-text'>Voyage: <span class='label label-info'>Hamburg</span> to <span class='label label-info'>Hong Kong</span></p></div>";
	content += "<div><p class='navbar-text'>Journey Dates: <span class='label label-info'>Dec-4-2014</span> to <span class='label label-info'>Jan-12-2014</span></p></div>";
	content += "<div><p class='navbar-text'>Type: <span class='label label-success'>Salary Deposited</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Amount: <span class='label label-info'>USD 3,200</span></p></div>";
	content += "<div><p class='navbar-text'>Vessel: <span class='label label-info'>Angelina Schulte</span></p></div>";
	content += "<div><p class='navbar-text'>Voyage: <span class='label label-info'>Hamburg</span> to <span class='label label-info'>Hong Kong</span></p></div>";
	content += "<div><p class='navbar-text'>Journey Dates: <span class='label label-info'>Dec-4-2014</span> to <span class='label label-info'>Jan-12-2014</span></p></div>";
	content += "<div><p class='navbar-text'>Type: <span class='label label-inverse'>Invoice Registered</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Amount: <span class='label label-info'>USD 7,800</span></p></div>";
	content += "<div><p class='navbar-text'>Vessel: <span class='label label-info'>Susanne Schulte</span></p></div>";
	content += "<div><p class='navbar-text'>Voyage: <span class='label label-info'>Cape Town</span> to <span class='label label-info'>Durban</span></p></div>";
	content += "<div><p class='navbar-text'>Journey Dates: <span class='label label-info'>Nov-27-2014</span> to <span class='label label-info'>Dec-9-2014</span></p></div>";
	content += "<div><p class='navbar-text'>Type: <span class='label label-success'>Invoice Paid</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'>Amount: <span class='label label-info'>$2,200</span></p></div>";
	content += "<div><p class='navbar-text'>Vessel: <span class='label label-info'>Intrepid</span></p></div>";
	content += "<div><p class='navbar-text'>Voyage: <span class='label label-info'>Singapore</span> to <span class='label label-info'>Hong Kong</span></p></div>";
	content += "<div><p class='navbar-text'>Journey Dates: <span class='label label-info'>Dec-9-2014</span> to <span class='label label-info'>Dec-22-2014</span></p></div>";
	content += "<div><p class='navbar-text'>Type: <span class='label label-inverse'>Medical Claim Submitted</span></p></div>";
	content += "</div>";

	$('#app-content').html(content);
	step_back = show_home_screen;
}

function show_my_alerts() {
	$('#app-index').hide();
	$('#app-content').show();
	$('#top-back').show();
	var content = "";

	content += '<p class="lead my-title">My Alerts</p>';
	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'><span class='label label-info'> Next Assignment: Drydock for Angelica Schulte at Hamburg on 12/12/2013 added.</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'><span class='label label-success'> Vessel Sussanne Schulte passed Wet Plate Survey on 14/11/2013.</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'><span class='label label-important'> 90% budget consumed for the vessel Erika Schulte!</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'><span class='label label-inverse'> A P.O. for $1700 was raised for the vessel Susanne Schulte</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'><span class='label label-info'> Hotel Booking April-9-2014 to April-12-2014 Added To Itineraries.</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'><span class='label label-success'> P.O. #1543245 for 'Wilden Pumps' delivered to Sussanne Schulte on 14/11/2013 6:23PM at Cape Town, South Africa.</span></p></div>";
	content += "</div>";

	content += "<div class='assignment-details'>";
	content += "<div><p class='navbar-text'><span class='label label-info'> Next Assignment: Audit scheduled for the vessel Trust Agility on 19/12/2013.</span></p></div>";
	content += "</div>";

	$('#app-content').html(content);
	step_back = show_home_screen;
}