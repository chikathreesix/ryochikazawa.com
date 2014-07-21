(function(global){
  function DrawerMenu(){
    var _$container, _$button, _$target, _$nav, _isOpen = false;

    initialize.apply(self, arguments);

    function initialize(){
      _$container = $('#drawerMenu');
      _$button = _$container.find('#drawerButton');
      _$target = _$container.find('#drawerTarget');
      _$nav = _$container.find('#drawerNav');

      _$button.click(_onClick);
    }  

    function _onClick(e){
      if(_isOpen){
        _$target.removeClass('open');
      }else{
        _$target.addClass('open');
      }
      _isOpen = !_isOpen;
    }
  }

  global.DrawerMenu = DrawerMenu;
})(window);
