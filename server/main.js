import { Meteor } from 'meteor/meteor';

Meteor.methods({
  deliverHTML() {
    return '&lt;div id=&quot;news-items&quot;&gt;&lt;div id=&quot;topnews&quot; class=&quot;important&quot;&gt;&lt;div class=&quot;icon&quot;&gt;&lt;img src=&quot;/images/news-important.jpg&quot;&gt;&lt;/div&gt;&lt;div class=&quot;body&quot;&gt;&lt;h1 style=&quot;font-size: 11pt;&quot;&gt;Flooding and Severe Weather Risk Continues This Weekend&lt;/h1&gt;&lt;p&gt;More heavy rain will exacerbate flooding in the central and southern U.S. this weekend. In addition, over portions of the Mississippi, Ohio, and Tennessee Valleys, severe thunderstorms are expected. Some storms may produce large hail, damaging winds, and tornadoes. Meanwhile, snow and ice will again affect the Cascades, northern Rockies, upper Midwest, and New England through Sunday.&lt;a href=&quot;http://www.wpc.ncep.noaa.gov/discussions/hpcdiscussions.php?disc=pmdspd&quot; target=&quot;_blank&quot;&gt;Read More &amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;';
  },
});
