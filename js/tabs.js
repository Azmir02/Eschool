/* Tabs - jQuery Plugin */

(function($){

	var methods = {
		init		: (function(settings, thatObj){
			var tabC = $('.'+settings.containerClass);
			if(settings.width) {
				var marginLeft = parseInt($(thatObj).find('.tabs-container').css('padding-left')) + 1;
				if(tabC.width() < settings.width) {
					$(thatObj).find('section').width($(thatObj).width() - (parseInt(marginLeft) * 2));
					$(thatObj).addClass('mView');
				} else {
					$(thatObj).width(settings.width);
					$(thatObj).find('section').width($(thatObj).find('.tabs-container').width());					
					$(thatObj).removeClass('mView');
				}
				$(thatObj).find('section').css('margin-right', marginLeft);
			}

			methods.createNav(thatObj);
			if(settings.defaultTab) {
				_liObject0	= $(thatObj).find('li');
				_liObject	= ($(thatObj).hasClass('mView')) ? $(thatObj).find('.dd-fold select') : _liObject0;
				defaultTab = (settings.defaultTab > (_liObject0.length - 1)) ? (_liObject0.length - 1) : settings.defaultTab;
				methods.setTabs(_liObject0, defaultTab, thatObj);
				methods.setContents(_liObject, defaultTab, thatObj);
			}
			// console.log('XX'+$(thatObj).attr('padding'));			
		}),
		setTabs		: (function(objTab, objIndex, thatObjC) {	// console.log('thatObjC: '+objTab); console.log(thatObjC);
			var objTabGroup = $(thatObjC).find('ul.tabs');
			// var objTabGroup = objTab.parent('ul.tabs');
			if($(thatObjC).hasClass('mView')) {
				var selDDObj = $(thatObjC).find('.dd-fold select');
				selDDObj.val($(selDDObj).find('option').eq(objIndex).val());
			} else {
				$(objTabGroup).find('li').each(function(i, v){
					if($(v).hasClass('active'))	{
						$(v).removeClass('active');
					} else if(i == objIndex) {
						$(v).addClass('active');
					}
				});
			}
			// objTabGroup.children().eq(objIndex).addClass('active');
		}),
		setContents	: (function(objTab, objIndex, thatObjC) {	// console.log('thatObjCx'); console.log($(thatObjC).hasClass('mView'));
			var objTabGroup = $(thatObjC).find('ul.tabs');
			// var objTabGroup = objTab.parent('ul.tabs');			
			var activeTab, tabWrapper, blockWidth;
			if($(thatObjC).hasClass('mView')) {
				activeTab = objTab.val();
				tabWrapper = $(activeTab).closest('.t-c');
				blockWidth = $(activeTab).innerWidth();
			} else {
				activeTab = objTab.find('a').attr('href');
				tabWrapper = $(activeTab).closest('.t-c');
				blockWidth = $(activeTab).innerWidth();
			}

			// var tabContainer = $(activeTab).parents('.tabs-container');
			// var blockWidth = $(activeTab).width();
			var blockMargin = parseInt($(activeTab).css('margin-right')) + 1;
			var lftMarginVal = -(objIndex * (blockWidth + blockMargin));
			$(activeTab).addClass('active');
			$(tabWrapper).animate({'marginLeft': lftMarginVal});
			// console.log(lftMarginVal);
		}),
		createNav	: (function(objTabC){			
			var ddFObject = $('<div/>').addClass('dd-fold').addClass('clearfix');
			var aSpanObj = $('<span/>');
			var aDivObj = $('<div/>').addClass('dd-select');

			var selObj = $('<select />').attr('id', 'sel' + $(objTabC).attr('id'));
			var menuOptions = $(objTabC).find('ul.tabs li');
			var selOptions = [];
			$.each(menuOptions, function(i, v){
				selOptions += '<option value="'+$(v).find('a').attr('href')+'">'+$(v).text()+'</option>';
			});
			$(selObj).append(selOptions);
			// console.log(selObj);
			$(aSpanObj).appendTo(ddFObject);
			$(selObj).appendTo(aDivObj);
			$(aDivObj).appendTo(ddFObject);
			$(objTabC).prepend(ddFObject);			
			// console.log('Creating Navigation...' + objTabC);
		})
	};

	var eventHandler = {
		click		: (function(e) {
			var $this	= $(this);
			// console.log(e.data.msg);
			e.preventDefault();
			methods.setTabs($this, $this.index(), $(e.data.msg));
			methods.setContents($this, $this.index(), $(e.data.msg));
			// console.log('Clicked...'+$this.index());
		}),
		mobNavSelect	: (function(e){
			var $this	= $(this);
			// methods.setTabs($this, $this.find('option:selected').index());
			methods.setContents($this, $this.find('option:selected').index(), $(e.data.msg));
			// console.log('Clicked Mobile Nav...' + $(this));
		})
	};

	$.fn.tabsA = function(options) {

		var settings = $.extend({
			width	: 750,
			containerClass	: 'tabs-main-wrapper',
			defaultTab	: 0
		}, options);
		
		return this.each(function(){
			methods.init(settings, this);
			$(this).find('li').bind('click', {msg: this}, eventHandler.click);
			$(this).find('.dd-select select').bind('change', {msg: this}, eventHandler.mobNavSelect);
		});
	}

})(jQuery);