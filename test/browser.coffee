
c = require('casper').create()
BASE_URL = 'http://localhsot:9080'

c.start BASE_URL + '/', ->
  @test.info '# START'

c.waitFor(
  -> @evaluate -> $('#repo').text() isnt ''
,
  -> @test.pass 'render repos collection'
)

c.then ->
  @test.info '# END'

c.run()
