
c = require('casper').create()
BASE_URL = 'http://localhsot:9080'

c.start BASE_URL + '/', ->
  @test.info '# START'

c.then ->
  @test.info '# END'

c.run()
