angular
  .module \app
  .config ($state-provider, $url-router-provider) ->
       $state-provider.state do
          * \doc
          * url: \doc
            parent: \root
            views:
               'content':
                  template-url: \doc
                  controller: \doc
                  