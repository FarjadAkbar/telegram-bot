const { Telegraf, Markup } = require('telegraf');

const button = Markup.button;

const bot = new Telegraf('1943511815:AAFegkUd01zVBIU4HlHmNyWoRF-qOA-4xWo');

bot.start(ctx => {
	let keyboard = Markup.inlineKeyboard([button.callback('Main Menu', 'menu')]);
	return ctx.reply('Click for Main Menu', keyboard);
});

let backKey = '';

bot.action('menu', ctx => {
	let message = ctx.update.callback_query.message;

	let keyboard = Markup.inlineKeyboard([button.callback('Profile', 'prf'), button.callback('Channel', 'chnl')]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('prf', ctx => {
	let message = ctx.update.callback_query.message;

	let keyboard = Markup.inlineKeyboard([
		button.callback('Wallet', 'wlt'),
		button.callback('Refferal', 'rfl'),
		button.callback('Back', 'menu'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('wlt', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'wlt';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Withdraw', 'end'),
		button.callback('Transfer', 'end'),
		button.callback('History', 'end'),
		button.callback('Back', 'prf'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('rfl', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rfl';

	let keyboard = Markup.inlineKeyboard([button.callback('Refferal History', 'end'), button.callback('Back', 'prf')]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('chnl', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'chnl';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Publish Info Channel', 'publishinfochannel'),
		button.callback('Signal', 'signal'),
		button.callback('Channel Managment', 'end'),
		button.callback('Admin Strategy', 'end'),
		button.callback('Back', 'menu'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});


//My CODE FOR START INFOCHANEL BUTTON
bot.action('publishinfochannel', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'publishinfochannel';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Update', 'publishupdate'),
		button.callback('Back', 'chnl'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// update sub menu start
bot.action('publishupdate', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'publishupdate';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Other Description', 'end'),
		button.callback('Contact Details', 'end'),
		button.callback('Channel Type', 'publishchanneltype'), //have sub menu
		button.callback('Signal Type', 'publishsignaltype'),  // have sub menu		
		button.callback('Supported Exchange', 'end'),
		button.callback('Publish Monthly Result', 'publishmonthlyresult'), // have sub menu	
		button.callback('Apply', 'end'),
		button.callback('Back', 'chnl'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// update sub menu end

// publish monthly result submenu start 
bot.action('publishmonthlyresult', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'publishmonthlyresult';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Enable/Disable', 'end'),
		button.callback('Back', 'publishupdate'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// publish monthly result submenu end 


// signal type submenu start 
bot.action('publishsignaltype', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'publishsignaltype';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Spot', 'end'),		
		button.callback('Future', 'end'),
		button.callback('Back', 'publishupdate'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// signal type result submenu end 


// channel type submenu start 
bot.action('publishchanneltype', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'publishchanneltype';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Free', 'end'),		
		button.callback('Paid', 'publishchanneltypepaid'), // have sub menu
		button.callback('Back', 'publishupdate'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// paid submenu start
bot.action('publishchanneltypepaid', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'publishchanneltypepaid';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Add New Plan', 'publishchannelnewplan'),	// have sub menu	
		button.callback('Edit Existing', 'publishchannelexistingplan'), // have sub menu
		button.callback('Back', 'publishchanneltype'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

//  add new plan sub menu start
bot.action('publishchannelnewplan', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'publishchannelnewplan';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('1 month', 'end'),		
		button.callback('3 month', 'publishchannelenterprice'), // have sub menu
		button.callback('6 month', 'end'),		
		button.callback('9 month', 'publishchannelenterprice'), // have sub menu
		button.callback('1 year', 'end'),		
		button.callback('3 year', 'publishchannelenterprice'), // have sub menu		
		button.callback('5 year', 'end'),		
		button.callback('Life Time', 'publishchannelenterprice'), // have sub menu		
		button.callback('Back', 'publishchanneltypepaid'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('publishchannelenterprice', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'publishchannelenterprice';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Enter Price', 'end'), // textbox		
		button.callback('Back', 'publishchannelnewplan'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
//  add new plan sub menu end

// edit existing submenu start 
bot.action('publishchannelexistingplan', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'publishchannelexistingplan';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Life Time', 'publishchannelexistinglifetime'), // have sub menu		
		button.callback('Back', 'publishchanneltypepaid'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// edit existing submenu end

// edit existing submenu start 
bot.action('publishchannelexistinglifetime', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'publishchannelexistinglifetime';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Change Price', 'end'), 
		button.callback('Delete Plan', 'end'), 
		button.callback('Back', 'publishchannelexistingplan'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// edit existing submenu end
// paid submenu end 
// channel type result submenu end 
//My CODE FOR END INFOCHANEL BUTTON


//My CODE FOR START SIGNAL BUTTON
bot.action('signal', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'signal';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Publish', 'end'),
		button.callback('Open Signal', 'opensignal'),
		button.callback('History', 'history'),
		button.callback('Signal Format', 'signalformat'),
		button.callback('Result Format', 'resultformat'),
		button.callback('Back', 'chnl'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});


bot.action('resultformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'resultformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Create New', 'rcreatenew'), // have submenu
		button.callback('Manage Format', 'rmanageformat'), // have submenu
		button.callback('Back', 'signal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// result format submenu start
// result format create new existing submenu start
bot.action('rcreatenew', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rcreatenew';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Enter Name', 'rentername'), // textbox / have submenu
		button.callback('Back', 'resultformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// result format enter name submenu start
bot.action('rentername', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rentername';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Spot', 'end'),
		button.callback('Future', 'end'),
		button.callback('Back', 'rcreatenew'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// result format enter name submenu end
// result format create new existing submenu end

// result format manage format submenu start
bot.action('rmanageformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rmanageformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Format 1', 'rsignalmanageformat'), // have submenu
		button.callback('Format 2', 'rsignalmanageformat'), // have submenu		
		button.callback('Format 3', 'rsignalmanageformat'), // have submenu
		button.callback('Back', 'resultformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// result format formats submenu start
bot.action('rsignalmanageformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rsignalmanageformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Edit', 'end'),
		button.callback('Delete', 'end'),		
		button.callback('Use', 'rsignalmanageformatuse'), //have submenu
		button.callback('Back', 'rcreatenew'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// result format use submenu start
bot.action('rsignalmanageformatuse', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rsignalmanageformatuse';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Select Channel', 'end'),
		button.callback('Back', 'rsignalmanageformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// result format select submenu end
// result format formats submenu end
// result format create new existing submenu end
// result format submenu end

// signal format submenu start
bot.action('signalformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'signalformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Create New', 'screatenew'), // have submenu
		button.callback('Manage Format', 'smanageformat'), // have submenu
		button.callback('Back', 'signal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// signal format create new submenu start
bot.action('screatenew', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'screatenew';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Enter Name', 'sentername'), // textbox / have submenu
		button.callback('Back', 'signalformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// signal format enter name submenu start
bot.action('sentername', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'sentername';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Spot', 'end'),
		button.callback('Future', 'end'),
		button.callback('Back', 'screatenew'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// signal format enter name submenu end
// signal format create new submenu end

// signal format manage format submenu start
bot.action('smanageformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'smanageformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Format 1', 'ssignalmanageformat'), // have submenu
		button.callback('Format 2', 'ssignalmanageformat'), // have submenu		
		button.callback('Format 3', 'ssignalmanageformat'), // have submenu
		button.callback('Back', 'signalformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// signal format formats submenu start
bot.action('ssignalmanageformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'ssignalmanageformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Edit', 'end'),
		button.callback('Delete', 'end'),
		button.callback('Back', 'smanageformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// signal format formats submenu end
// signal format manage format submenu end
// signal format submenu end

// open signal submenu start
bot.action('opensignal', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'opensignal';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Filter', 'openfilter'), // have submenu
		button.callback('Back', 'signal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// open signal filter submenu start
bot.action('openfilter', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'openfilter';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('By Coin', 'end'),
		button.callback('By Signal Type', 'end'),
		button.callback('Apply', 'openapply'), //have submenu
		button.callback('Back', 'opensignal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// open signal apply submenu start
bot.action('openapply', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'openapply';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Edit', 'end'),
		button.callback('Cancel', 'end'),
		button.callback('Back', 'opensignal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// open signal apply submenu end
// open signal filter submenu end
// open signal submenu end

// history histroy submenu start
bot.action('history', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'history';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Export', 'end'),		
		button.callback('Filter', 'historyfilter'), //have submenu
		button.callback('Back', 'signal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// history filter submenu start
bot.action('historyfilter', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'historyfilter';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('By Date', 'historydate'), // have submenu		
		button.callback('By Signal Type', 'historysignaltype'), // have submenu
		button.callback('By Coin', 'end'),
		button.callback('Export', 'end'),
		button.callback('Back', 'history'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// open signal date submenu start
bot.action('historydate', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'historydate';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Start Date', 'end'),	// date	
		button.callback('End Date', 'end'),    // date
		button.callback('Back', 'historyfilter'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// history date submenu end

// history sugnal type submenu start
bot.action('historysignaltype', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'historysignaltype';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Spot', 'end'),		
		button.callback('Future', 'end'),
		button.callback('Back', 'historyfilter'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});
// history date submenu end
// history filter submenu end
// history submenu end

// MY CODE END FOR SIGNAL BUTTON

bot.action('end', ctx => {
	let message = ctx.update.callback_query.message;

	let keyboard = Markup.inlineKeyboard([button.callback('End', 'End'), button.callback('Back', backKey)]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'This is end', keyboard);
});

bot.action('End', ctx => {
	return ctx.reply('This is End...Please /start again');
});

bot.launch();
