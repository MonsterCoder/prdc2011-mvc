prdc.views.Templates = {};

Ext.apply(prdc.views.Templates, {
        speakerItem: '<img src="http://prairiedevcon.com/Content/imgs/speakers/{picture}" alt="{picture}" /> <div><h3>{name}, {location}</h3><h4>{company}</h4></div>' ,
		speakerDetail: '{name}<p>{bio}</p>',  	
		sessionItem: '{title} <p>{speakers}</p>',
		sessionDetail: '{title}<p>{abstract}</p>'
});