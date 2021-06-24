=== Zoom Video Conferencing on WordPress ===
Contributors: j__3rk, digamberpradhan, eLearning evolve
Author URI: https://elearningevolve.com
Plugin URI: https://elearningevolve.com/products/zoom-wordpress-plugin
Slug: wordpress-zoom-addon
Tags: zoom video conference, video conference, zoom, zoom video conferencing, web conferencing, online meetings
Requires at least: 4.8
Tested up to: 5.7.1
Stable tag: 4.14.1
Requires PHP: 5.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Gives you the power to conduct Zoom Meetings directly on your WordPress site, check meeting reports and create Zoom users from your dashboard.

== Description ==

This is an extended version of Video Conferencing with Zoom (by Deepen Bajracharya), this plugin enables you to conduct Zoom meetings directly on your WordPress site using a simple shortcode.

**Few Features:**

1. Manage Meetings
2. List/Add Users
3. Clean and Friendly UI
4. Shortcodes
5. Daily and Account Reports
6. Directly conduct zoom meeting on your site using a simple shortcode
7. Restrict access for non-logged in WordPress users
8. Play cloud recordings for Zoom meetings

**Limitations**

* Webinar module not integrated

**Use shortcode**

* [zoom_api_link meeting_id="zoom_meeting_id" class="your_class" id="your_id" title="Meeting Title"] -> You can show the link of your meeting in your site anywhere using the shortcode. Replace your zoom meeting ID in place of "zoom_meeting_id".

* Or add from icon in classic editor or gutenberg block!

**Find a Short Documentation or Guide on how to setup: [Here](https://elearningevolve.com/products/zoom-wordpress-plugin)**

**Using Action Hooks**

* 1. zoom_wp_after_create_meeting( $meeting_id, $host_id, $meeting_time ) *
Hook this method in your functions.php file in order to run a custom script after a meeting has been created.

* 2. zoom_wp_after_update_meeting( $meeting_id, $host_id, $meeting_time ) *
Hook this method in your functions.php file in order to run a custom script after a meeting has been updated.

* 3. zoom_wp_after_create_user( $created_id, $created_email ) *
Hook this method in your functions.php file in order to run a custom script after a user is created.

**Please consider giving a [5 star thumbs up](https://elearningevolve.com/products/zoom-wordpress-plugin) if you found this useful.**

Any additional features, suggestions related to translations you can contact me via [email](https://elearningevolve.com/contact).

== Installation ==
Search for the plugin -> add new dialog and click install, or download and extract the plugin, and copy the the Zoom plugin folder into your wp-content/plugins directory and activate.

== Frequently Asked Questions ==
= Please visit the [FAQ section](https://elearningevolve.com/products/zoom-wordpress-plugin#faq) on the plugin page =

== Screenshots ==
1. Meetings Listings. Select a User in order to list meetings for that user.
2. Add a Meeting.
3. Add Meeting into a post using tinymce shortcode button.
4. Users List Screen. Flush cache to clear the cache of users.
5. Reports Section.

== Changelog ==
= 4.14.1 April 30, 2021 =
* Added: Ability to add shortcodes in Thank you message shown at the end of meeting from Settings -> Visual -> Thankyou Message on Meeting End
* Update: Rename Join Before Time button text to Join Early
* Update: Rename Register for Meeting|Webinar button text to Register

= 4.14.0 April 23, 2021 =
* Added: Ability to set Meeting host access by WordPress user role from Settings -> Configuration
* Added: Ability to set Meeting host access by WordPress user capabilities from Settings -> Configuration
* Fixed: Fixed PHP error Warning: mt_rand() expects parameter 2 to be integer, float given. (Thanks to Daniel for his contribution on this bug fix)
* UI Fixed: Popups inside meeting window breaking on small mobile screens
* Update: Rename Join via Zoom App button text to Join via App
* Update: Rename Add to Calendar button text to Mark Meeting/Webinar

= 4.13.5 April 14, 2021 =
* Fixed: All recordings showing up for a single Zoom meeting

= 4.13.4 April 13, 2021 =
* Fixed: Duplicate recording videos uploaded to Vimeo
* Fixed: DateTime error on plugin backend meeting list page

= 4.13.3 March 26, 2021 =
* Added: Ability to set a Thank you page from Zoom Meetings -> Settings -> Configuration -> Meeting Thank you Page
* Fixed: Prevent display of Thank you message if meeting is not started yet
* Optimization: Prevent loading of unnecessary assets when showing Thank you message

= 4.13.2 March 15, 2021 =
* Fixed: Recordings button not working on specific WP themes
* Fixed: DateTime PHP error on backend meeting list page

= 4.13.1 March 10, 2021 =
* Updated: Zoom Web SDK to [v1.9.1](https://timeline.noticeable.io/8xmdmkir8ctlkfj8dttx/publications/untitled-2?cache=false&embed=true)
* Fixed: Incorrect "Joining meeting timeout" error on meeting join for specific WordPress Site Language

= 4.13.0 March 6, 2021 =
* Added: Add to Calendar button on the meeting join form
* Added: Ability for attendees to add the Zoom meeting to their own Google calendar via button click
* Added: Ability to show/hide the Add to Calendar button from plugin settings -> Visual -> Hide Add to Calendar Button
* Update: Plugin language translation POT template file
* Fixed: Ability to set the preferred text for Join via App button from Zoom Meetings -> Settings -> Visual -> Join via App Button Text
* Fixed: Meeting Report -> Export as CSV button not working on some WordPress/Hosting configurations
  
= 4.12.3 February 26, 2021 =
* Fixed: Start and End time for multiple Zoom recording video on the same page
* Fixed: Email field max length on Webinar page increased to 254 from 32 characters

= 4.12.2 February 16, 2021 =
* Added: Ability to set the preferred text for Join via Web button from Zoom Meetings -> Settings -> Visual -> Join via Web Button Text
* Fixed: Form name field placeholder to reflect the preferred meeting name format set in Zoom Meetings -> Settings -> Configuration -> Attendee WordPress Name Format
* Fixed: [zoom_api_link] shortcode parameter show_join_app not working

= 4.12.1 February 10, 2021 =
* Added: Ability to set the preferred meeting name format from Zoom Meetings -> Settings -> Configuration -> Attendee WordPress Name Format
* Added: Ability to set the preferred target for Join via Zoom App from Zoom Meetings -> Settings -> Configuration -> Zoom App Target Window
* Fixed: Compatibility with WP Vimeo Video Pro

= 4.12.0 February 6, 2021 =
* Major Feature: Support for Gallery/Grid view feature through Web SDK [v1.9.0 update](https://timeline.noticeable.io/8xmdmkir8ctlkfj8dttx/publications/untitled-1)
* Major Feature: Support for Vimeo as an alternate option to display Zoom cloud recording videos. [View details](https://elearningevolve.com/products/zoom-wp-vimeo-addon/)
* Added: New Vimeo Addon added to Zoom Meetings -> extension
* Added: Ability to set Vimeo as the recording video from Zoom Meetings -> Settings -> Recording
* Added: New plugin menu Zoom Meetings -> Error Logs
* Added: Ability to show language select field for Zoom window from Zoom Meetings -> Settings -> Visual -> Show Language Field
* Fixed: Show Meeting Participants Report -> duration field in minutes instead of seconds
* Fixed: Signature expired error in Zoom window incase the hosting server time is not up to date

= 4.11.6 January 28, 2021 =
* Added: Ability to prevent auto-scroll to Zoom window from Zoom Meetings -> Settings -> Visual
* Added: Ability to copy meeting shortcode from Edit Meeting page
* Update: Pre-select logged in user as the Meeting Host on Add Meeting
* Fixed: Error when curl PHP extension is missing on the server hos
* Fixed: Recording popup disappears after a click on the meeting page. Conflict identified with specific themes and plugins
* Fixed: Zoom meeting window not loading on specific themes after plugin update

= 4.11.5 January 12, 2021 =
* Update: Zoom Web SDK to [v1.8.6](https://timeline.noticeable.io/8XMdMkIr8cTlKfj8DTtx/posts/web-sdk-updates-version-1-8-6) which fixes some critical bugs
* Fixed: Meeting password not updated on create meeting from backend and password is enforced in Zoom settings

= 4.11.4 January 7, 2021 =
- Happy New Year :)
* Added: CSS class on countdown redirect text to allow custom styling
* Added: Ability to show Join via Web and App buttons on individual meeting via shortcode parameter. See Zoom Meetings -> Setup -> Using Shortcodes
* Fixed: Japanese language not detected by Zoom SDK when set as WP default
* Fixed: Conflict with SG Optimizer plugin, double page load with redirect to a nocache meeting page
* Fixed: Conflict with Eduma theme, zoom window not loading on meeting page 

= 4.11.3 December 31, 2020 =
* Fixed: Double reload of meeting page when shortcode added to Elementor widget
* Fixed: Zoom window height too long on some themes

= 4.11.2 December 25, 2020 =
* Fixed: Warnings on meetings list page on PHP below v7.4
* Updated: Remove created at field from meetings list page and improve UI

= 4.11.1 December 24, 2020 =
* Fixed: Error during plugin update in PHP v7.2

= 4.11.0 December 23, 2020 =
* Added: On-site Join via Web and Join via App buttons on the meeting list page
* Performance: Optimize meeting list page 
* Update: Zoom Web SDK to [v1.8.5](https://devforum.zoom.us/t/action-required-web-sdk-update-version-1-8-5/39004) which added support for Breakout Rooms, Polling, and Live Transcription
* Update(Multisite): WP users on Add Meeting -> Meeting Host and Map Zoom User page to come from only the respective subsite
* Update: Add draggable UI option for Meeting/Webinar registration popup on the countdown page
* Fixed: Users with nonsubscriber/customer not displaying in Add Meeting and Map Zoom host page when a multi-user role plugin is enabled
* Fixed: Show PMI meeting at the top of the meetings list
* Fixed: Meeting not removed from the list after delete
* Fixed: Incorrect empty record message on meeting and user list page

= 4.10.3 December 9, 2020 =
* Fixed: Unable to see all available users from Zoom account. Click Zoom Meetings -> Zoom Users -> Sync Zoom Users button after update 

= 4.10.2 December 7, 2020 =
* Updated: Zoom Web SDK [version 1.8.3](https://marketplace.zoom.us/docs/changelog)
* Fixed: Slow down of admin panel plugins page loading time

= 4.10.1 December 5, 2020 =
* Added: Ability to add Custom CSS in Zoom window from Zoom Meetings -> Settings -> Visual -> Custom CSS in Zoom Window
* Fixed: Plugin conflict with UX Builder - Flatsome
* Fixed: Open Join via App in the same window to prevent duplicate user names in meeting

= 4.10.0 November 27, 2020 ([View detailed blog post for this update](https://elearningevolve.com/blog/zoom-wordpress-plugin-v4-10-0/)) =
* Added: New shortcode to display any Zoom cloud recording [zoom_recording play_url='xx']. [See usage instruction](https://elearningevolve.com/blog/zoom-wordpress-plugin-v4-10-0/#recording-play-url)
* Added: Ability to set start and end time for recording video from recording shortcode options. See Zoom Meetings -> Settings -> Using Shortcodes for usage instruction.
* Added: Show cloud recordings up to 3 months old in the recordings list
* Added: Display all the available users and meetings from the Zoom account(get over the previous limitation of a max 300 users and meetings)
* Added: Scroll to Zoom meeting window on page load
* Added: Option to disable recording video autoplay from Zoom Meetings -> Settings -> Recording
* Added: Remove recording from WP when deleted from Zoom account
* Added: Add recording to WP when restored from Zoom account
* Fixed: Incorrect user name displayed in Zoom meeting participants screen
* Fixed: Meeting window chat screen UI issue on mobile screens
* Fixed: Meeting recoding video is missing the close caption version of the recording
* Fixed: Prevent connect timeout errors when calling Zoom API

= 4.9.6 November 10, 2020 =
* Added: Ability to disable auto rendering of meeting recording after the meeting ends from Zoom Meetings -> Settings -> Configuration
* Added: Ability to disable cache mode from Zoom Meetings -> Settings -> Configuration
* Added: Compatibility with Instructor Role for Zoom WordPress Plugin v1.1.0
* Fixed: Order meetings list by creation date
* Fixed: Plugin JS and CSS conflict with WPLMS theme for recording popup
* Fixed: Meeting window shows 404 error with custom permalink structure
* Removed: Attention score field in meeting reports(removed by Zoom) 

= 4.9.5 October 25, 2020 =
* Fixed: Recordings button on meeting page reloading the page again

= 4.9.4 October 24, 2020 =
* Fixed: Home page displayed in Zoom window in a multisite subsite with domain configuration

= 4.9.3 October 24, 2020 =
* Fixed: Shortcode keeps loading in visual composer frontend editor
* Fixed: Errors when deleting a Zoom meeting from backend
* Fixed: Shortcode preview not displayed in Elementor visual editor

= 4.9.2 October 22, 2020 =
* Fixed: Redirected too many times error with frontend visual builders on shortcode page
* Fixed: Auto redirect from countdown to webinar page not working when webinar started
* Fixed: countdown timer styling conflict with WPLMS theme
* Fixed: Recording modal styling conflict with specific themes
* Fixed: Recording modal not opening with specific themes

= 4.9.1 October 21, 2020 =
* Added: Daily cronjob to pull and refresh the Zoom meeting recordings
* Added: Ability to remove the password from Join via App link from Zoom Meetings -> Settings -> Configuration

= 4.9.0 October 20, 2020 =
* Performance: Prevent redirect to non-cached meeting page after page load thereby speeding up the load time
* Added: New shortcode to display only the latest meeting recording video [zoom_latest_recording meeting_id="x"]
* Added: Gutenberg block and option in the text editor to embed the new latest recording shortcode
* Added: Display Register for Meeting/Webinar Zoom form on the same page in a modal
* Added: Ability to hide countdown timer from Zoom Meetings -> Settings -> Visual
* Fixed: Hide Register for Meeting/Webinar button when user registration created on Zoom
* Fixed: Prevent countdown timer view when Webinar is started
* Fixed: Signature is invalid in Zoom meeting window
* Fixed: Invalid meeting ID error on create/update meeting
* Fixed: Improve error reporting on plugin backend
* Fixed: The response is not a valid JSON response error on page publish
* Fixed: ZOOM API ERROR: Meeting does not exist: 0

= 4.8.3 October 15, 2020 =
* Added: Error notice for Join via Web for registered Zoom Meetings
* Fixed: Error inside Zoom window: Invalid parameter
* Fixed: Prevent plugin CSS loading on all the pages
* Fixed: Incorrect spanish translation for Join via Web
* Removed: Zoom App verification token field

= 4.8.2 October 13, 2020 =
* Added: Ability to Show/Hide Join Before Time button from Zoom Meetings -> Settings -> Visual
* Added: Ability to Show/Hide Register for Meeting/Webinar button from Zoom Meetings -> Settings -> Visual
* Added: Ability to change Zoom window size in Zoom Meetings -> Settings -> Visual
* Added: Updated language files for text "Join Before Time" and "Back To Meeting"
* Fixed: Show Back to Meeting button with Thankyou message
* Fixed: Error message ZOOM API ERROR: Meeting does not exist: 0
* Fixed: Meeting input fields width on mobile resolution

= 4.8.1 October 9, 2020 =
* Added: Auto load latest Meeting recording once the meeting is ended **(Requires that [Event subscription on your JWT app](https://elearningevolve.com/blog/zoom-api-keys#event-subscription) is setup)**
* Added: Auto play Meeting recording video
* Added: Back to Meeting button on recording view
* Added: Make the Meeting recordings popup as Draggable
* Added: Add Join Before Time button on Meeting countdown page

= 4.8.0 October 2, 2020 ([View detailed blog post for this update](https://elearningevolve.com/blog/support-for-past-meeting-recordings-added-in-v4-8-0/)) =
* Added: Allow user to select any past recording up to 1 month on the meeting page 
* Added: Ability to change thankyou message that displayed on meeting end from Zoom Meetings -> Settings -> Visual
* Fixed: Sync Meetings & Webinars button on meeting list now syncs all Meeting and Webinar changes, Meetings list for the selected host, Cloud recordings
* Fixed: UI improvements for play recording container, meeting countdown, and show loading icon before displaying the non-cached page
* Fixed: Speed Improvement: prevent fetching new meetings list from Zoom API on meeting add/update/delete
* Removed: Assign Latest Recording option in meeting edit page, all past recordings up to 1 month are assigned via Zoom events or synced manually via the Sync Meetings & Webinars button on the meeting list
* Removed: Error notification for HTTP_AUTHORIZATION headers and incorrect App Verification Token

= 4.7.2 September 25, 2020 =
* Added: Zoom Web SDK updated to v1.8.1, see [Zoom changelog](https://marketplace.zoom.us/docs/changelog)
* Added: Ability to hide the Register Zoom button on meeting countdown page from Zoom Meetings -> Settings -> Visual
* Fixed: Redirect loop on the meeting countdown due to cache plugins
* Fixed: Server timeout error on backend plugin menus incase of large no Zoom users in the account

= 4.7.1 September 22, 2020 =
* Added: New button on countdown timer page to pre register for a registered Meeting/Webinar
* Added: Ability to Hide Join via Web functionality from Zoom Meetings -> Settings -> Visual
* Added: HTTP AUTHORIZATION rule in .htaccess via plugin to prevent the missing HTTP Authorization error notice for Zoom events
* Fixed: First and last name used to pre-fill user name on meeting join form

= 4.7.0 September 19, 2020 =
* Added: Redirect to meeting page from countdown if meeting is started by the host **(Requires that [Event subscription on your JWT app](https://elearningevolve.com/blog/zoom-api-keys#event-subscription) is setup)**
* Added: Enable Translation of contents inside of the Zoom Window for all country variations of an available translation language i.e(Deutsch, Spanish, French, Japanese, Portuguese, Russian, Chinese, Korean, Vietnamese, Italian)
* Added: Translation strings for Spanish @Thanks to Camilo Saenz
* Fixed: Blank Add Meeting page on WordPress version < 5.3
* Fixed: Force nocache on meeting page to prevent cached version of the page

= 4.6.8 September 16, 2020 =
* Added: Show error message on meeting edit if Use Personal Meeting ID (PMI) when scheduling a meeting is turned on in Zoom settings
* Fixed: Hide email field on meeting join for non-logged in user
* Fixed: Error when delete bulk meetings action is applied from meetings list
* Fixed: Thankyou message not displayed at the end of meeting if site url is different than the main domain URL

= 4.6.7 September 12, 2020 =
* Fixed: Prevent error if no response received from Zoom API on meeting create/update
* Fixed: Prevent cache and show countdown screen if a past meeting date is changed to a future date
* Fixed: Meeting countdown not working in IE @Thanks to Chris Lee for reporting with the fix
* Added: Ability to add the Chrome WebAssembly SIMD Token from Zoom Meetings -> Settings

= 4.6.6 September 10, 2020 =
* Fixed: Error during plugin update in v4.6.5

= 4.6.5 September 10, 2020 =
* Fixed: Incorrect time saved on Zoom meeting update from backend
* Fixed: Permission denied error on some hosts for directly accessing the meeting file

= 4.6.4 September 9, 2020 =
* Added: Show Personal Meeting ID(PMI) in Zoom Meetings list for each host
* Added: Mexican Spanish translation files
* Fixed: Show incorrect Meeting ID error on shortcode page to only administrator users
* Fixed: Sync Zoom Meetings on meeting list does not clear cache for individual meeting options

= 4.6.3 September 7, 2020 =
* Added: Pre-select Add Meeting -> Timezone selected in WordPress Settings -> General -> Timezone
* Added: Show error on frontend meeting page if incorrect Zoom Meeting ID is set in the shortcode
* Fixed: Zoom Window does not load due to Content Secure Policy error caused by Tin Canny Reporting for LearnDash plugin
* Fixed: 500 internal server error in Zoom Meeting menus for sites with a large no.of WordPress users

= 4.6.2 September 4, 2020 =
* Added: Sync Zoom Meetings button on meeting list page
* Added: Sync Zoom Users button on users list and assign host page
* Fixed: Selected Assign recording option not saved for meeting on Edit Meeting page
* Fixed: Recording not displayed on frontend if Viewer download check is turned off in Zoom account settings 

= 4.6.1 September 2, 2020 =
* Fixed: License error in subsites of a Multisite network
* Fixed: Meeting host not displayed in Zoom Meetings -> Add Meeting in a Multisite subsite
* Fixed: Zoom meetings list show incorrect start time for a recurring meeting
* Fixed: Performance optimization, prevent the loading of admin assets on the frontend
* Added: Updated to Zoom Web SDK 1.8.0 from 1.7.10
* Removed: Start Webinar button above the meeting window on Webinar
* Added: Ability for Meeting hosts & administrators on WordPress to start the Webinar by joining the meeting from the window
* Added: Ability for attendees to join an embedded Zoom Webinar which requires registration
* Added: Hide Meeting ID and Participant ID on Zoom waiting Room screen to avoid unwanted participants
* Added: License check before initializing plugin. Please make sure your license is added in Zoom Meetings -> Settings -> Setup

= 4.6.0 August 31, 2020 =
* Added: Updated to Zoom Web SDK 1.8.0 from 1.7.10
* Removed: Start Webinar button above the meeting window on Webinar
* Added: Ability for Meeting hosts & administrators on WordPress to start the Webinar by joining the meeting from the window
* Added: Ability for attendees to join an embedded Zoom Webinar which requires registration
* Added: Hide Meeting ID and Participant ID on Zoom waiting Room screen to avoid unwanted participants
* Added: License check before initializing plugin. Please make sure your license is added in Zoom Meetings -> Settings -> Setup
* Fixed: Missing HTTP_AUTHORIZATION headers message when .htaccess redirect added for Zoom events

= 4.5.4 August 26, 2020 =
* Fixed: Invalid Signature error when joining meeting due to meeting ID with dashes(-)
* Fixed: Signature expired error when joining meeting for specific users
* Fixed: Hide subscribe for mailing list notice on user action

= 4.5.3 August 22, 2020 =
* Fixed: Hourly cronjob to update recurring meeting countdown when meeting is created from the Zoom portal

= 4.5.2 August 21, 2020 =
* Fixed: Thankyou message on frontend meeting page after user leaves the meeting
* Fixed: Meeting details missing on subsequent reload of the admin meeting page

= 4.5.1 August 18, 2020 =
* Fixed: Refresh Zoom meetings list on adding new meeting and update

= 4.5.0 August 18, 2020 =
* Fixed: Ability to generate Zoom Meeting/Webinar shortcode from classic WP editor. [See blog post for more info](https://elearningevolve.com/blog/generate-zoom-meeting-shortcode/)
* Added: New Gutenberg block create under Embed category to generate Zoom Meeting/Webinar shortcode
* Added: Show Thankyou message to users on leaving the meeting

= 4.4.1 August 15, 2020 =
* Fixed: WP user account warning for Zoom host emails shows up for existing WP users

= 4.4.0 August 14, 2020 =
* Added: Export as CSV option for all reports under Zoom Meetings -> Meeting Reports
* Added: Mailchimp email subscription notice if not already subscribed for plugin updates
* Fixed: Show logged in user display name in the meeting name field
* Fixed: Show meeting name instead of email field for logged in Webinar attendees
* Fixed: Refresh Zoom meetings list right after a meeting is deleted from Dashboard

= 4.3.4 August 10, 2020 =
* Fixed: Internal server error due to conflict with other plugins inside Zoom window

= 4.3.3 August 8, 2020 =
* Fixed: Load plugin JS scripts in footer to avoid errors

= 4.3.2 August 8, 2020 =
* Added: Show warning for missing Zoom hosts as WP users on the site
* Added: Set the WordPress site language as the Zoom window language
* Fixed: Blank white screen instead of the Zoom window
* Fixed: UI styling issues on the meeting join form

= 4.3.1 August 7, 2020 =
* Added: Speed Optimization for Backend Zoom Meetings list page
* Added: Sync Meeting list update with Zoom events **(Requires that [Event subscription on your JWT app](https://elearningevolve.com/blog/zoom-api-keys#event-subscription) is setup)**
* Fixed: Show Start Webinar button in Auto join mode
* Fixed: Disable host access with Join via Web for webinars to prevent "Not allow to start webinar from web" error
* Fixed: Include meeting password in Join via Zoom App link

= 4.3.0 August 4, 2020 =
* Added: New option in meeting settings as "Assign Latest Recording Type" to manually assign cloud recording for the meeting
* Fixed: Cloud recording type not mapped to the meeting on recording complete event
* Fixed: Black bar area below the participant video on specific screen resolutions
* Fixed: Layout issue with the meeting window on mobile and monitor screens

= 4.2.8 August 3, 2020 =
* Fixed: Error in Auto join by LearnDash group

= 4.2.7 August 3, 2020 =
* Fixed: Webinar attendees not able to receive host audio

= 4.2.6 August 2, 2020 =
* Fixed: Error on Zoom Meeting page "You do not have access to view any Zoom Meeting"

= 4.2.5 August 1, 2020 =
* Fixed: Webinar attendee is missing the host video

= 4.2.4 July 31, 2020 =
* Added: Additional checks for App verification token validity
* Added: Hide Join by audio for webinar attendees
* Added: Start Webinar button on frontend for the Webinar Host
* Added: Security checks for plugin meeting page

= 4.2.3 July 30, 2020 =
* Fixed: Remove the meeting auto end job if a meeting is ended manually by the host

= 4.2.2 July 30, 2020 =
* Added: Zoom Meetings -> Settings -> App Verification Token is now required to listen for Zoom events
* Added: Show cloud recording instantly when its ready via Zoom event **(Requires that [Event subscription on your JWT app](https://elearningevolve.com/blog/zoom-api-keys#event-subscription) is setup)**
* Fixed: cloud recording not being displayed for certain meetings
* Fixed: 404 not found message inside meeting window

= 4.2.1 July 29, 2020 =
* Added: Store options in WordPress via webhook on Meeting/Webinar create outside of WordPress
* Added: Support for Webinar with the Auto End meeting setting
* Fixed: Incorrect meeting host displayed on edit meeting page
* Fixed: Prevent Zoom users which are not the meeting host to start the meeting from WordPress
* Fixed: Updated POT translation file for new translation strings

= 4.2.0 July 28, 2020 =
* Added: New setting to enable logged in WP users auto-join meeting. Enable this option from Zoom Meetings -> Settings -> Meeting Auto Join
* Added: New setting to enable auto end meeting mode. Enable this option from Zoom Meetings -> Settings -> Meeting Auto End
* Added: Allow mapping of multiple Zoom hosts to a single WP user in Zoom Meetings -> Map Zoom Hosts **(Requires that you map your WP users again & click Save mapping under Zoom Meetings -> Map Zoom Hosts for the new host mapping changes to work)**
* Added: Limit the auto-join meeting to ONLY the selected LearnDash group users for each meeting from Zoom Meetings -> Add Meeting -> Auto Join By LD Group
* Added: Remove cache from WP site on meeting update/delete from Zoom App **(Requires that [Event subscription on your JWT app](https://elearningevolve.com/blog/zoom-api-keys#event-subscription) is setup)**
* Removed: Flush meeting cache. The meeting options cached in WP will sync automatically from changes outside of WP.
* Modified: Default meeting duration set to 15 mins
* Fixed: Allow Zoom Meetings -> Map Zoom Hosts to show all users(except for subscriber & customer user role)
* Fixed: Allow Zoom Meetings -> Add Meeting-> Meeting Host to show all users(except for subscriber & customer user role)
* Fixed: Updated POT translation file for new translation strings

= 4.1.1 July 24, 2020 =
* Fixed: Incorrect meeting host selected for previous Zoom meetings
* Fixed: After End meeting the page redirects to meeting join

= 4.1.0 July 22, 2020 =
* Added: Ability to select a WordPress user as the Meeting host
* Added: (Zoom Meetings -> Map Zoom Hosts) menu to map a Zoom host on your account to a WordPress user
* Fixed: Disable invite to meeting button on Participants screen

= 4.0.2 July 18, 2020 =
* Fixed: Error (Password wrong) when joining a Webinar from Join via Web
* Fixed: Error (User email is required) when joining a Webinar from Join via Web
* Added: New shortcode parameter (is_webinar) for fixing Zoom Webinar join errors. See Zoom Meetings -> Settings -> Using Shortcode
* Added: Pass WP user email along with username to Zoom when logged in
* Added: New Meeting/Webinar Participants Report under Zoom Meetings -> Reports -> Past Meetings Report
* Added: Allow setting global meeting & countdown title for all meetings
* Fixed: Remove default title for Meeting and countdown
* Added: Translation strings for Hebrew (Thanks to Barak Lieberman)

= 4.0.1 July 16, 2020 =
* Added: Password authentication on join screen when password is set for a meeting
* Fixed: Show meeting password field only when it is set on the meeting
* Fixed: Allow site administrator(s) to join meeting as host
* Fixed: RTL CSS issue for meeting countdown

### 4.0.0 July 15, 2020 ###
* Major upgrade: Replaced Zoom meeting window with the officially supported Zoom Web SDK for better integration with Zoom
* Added: Disable invite link inside Zoom Meeting
* Added: If the user is logged in, auto set WordPress user name as the meeting join name
* Added: Link to redirect to meeting page if a user is not auto redirected after the countdown
* Added: New option to enable waiting rooms in Add/Edit Meeting
* Added: New option to enable Zoom authentication in Add/Edit Meeting
* Fixed: Redirection to meeting page after countdown not working due to page cache

= 3.4.0 =
* Added: Ability to let users play the latest cloud recording for the meeting. [Read more](https://elearningevolve.com/blog/zoom-cloud-recordings-in-wordpress/)
* Added: Updated POT file with translations
* Fixed: Center align buttons above the Zoom window

= 3.3.3 =
* Fixed: Start meeting button for host on meeting page now starts the meeting within the Zoom window.
* Fixed: Removed site wide license key notice
* Fixed: Center align the Zoom meeting window

= 3.3.2 =
* Added: License Key field in Zoom Meetings -> Settings. See [Note](https://elearningevolve.com/blog/zoom-wordpress-plugin-pricing-update/) for plugin licensing and auto update for existing users.
* Fixed: saved button class does not display in plugin settings.

= 3.3.1 =
* Added: Support for the new [Recurring Meetings Addon](https://elearningevolve.com/products/zoom-wp-recurring-meetings/)
* Added: Extensions menu to show the list of available addons for the plugin
* Added: Spanish translation files thanks to Sebastian Fell
* Added: Show warning when Zoom API Limit is reached

### 3.3.0 ###
* Added: Support for the new [Instructor Role Addon](https://elearningevolve.com/products/zoom-wp-instructor-role/)

= 3.2.3 =
* Added: Flush Meetings Cache link on backend meetings list

= 3.2.2 =
* Fixed: Incorrect meeting countdown when meeting created from Zoom account
(Note: please update the meeting from plugin backend if the meeting time is updated from Zoom account to sync the meeting time)

= 3.2.1 =
* Fixed: Adjustment issue with custom width height

= 3.2.0 =
* Fixed: Meeting countdown layout on LearnDash focus mode
* Fixed: Meeting countdown not showing up when meeting created from Zoom account
* Added: UI improvements for the meeting window and the links above
* Added: Ability to set width and height in shortcode for each meeting (width and height set on shortcode will take precedence over global width and height set in the plugin settings) 
* Added: Countdown title on the meeting page
* Added: Ability to change the meeting coutndown title from the shortcode
* Added: Portuguese (Brazil) translation files thanks to Wanilton Campos
 
= 3.1.6 =
* Added: Ability to add multiple meeting countdowns for different Zoom meetings on the same page 
* Fixed: Subscribe to updates plugin setting not working
* Fixed: Blank screen on meeting join page, changed the workflow of joining meeting from frontend according to Zoom updates.
  Please change the Zoom meeting window size accordingly from Zoom meetings -> Settings -> Change Dimensions of Zoom Meeting Window
 
= 3.1.5 =
* Added: Meeting password option on step 1 of the meeting page
* Added: Helpful error messages incase the API Keys are entered incorrectly or error from Zoom API 
* Added: Helpful messages with meeting fields on create/edit meetings
* Fixed: Prevent Zoom password screen on step 2 after entering name
* Fixed: Zoom added a new setting to prevent login for participants before joining meeting. More details [here](https://elearningevolve.com/blog/zoom-added-the-setting-to-disable-login-for-meeting-participants)

= 3.1.4 =
* Added: Zoom services status check link in plugin admin pages
* Fixed: Typo in alternative host field message on meeting add/edit

= 3.1.3 =
* Alert: Zoom web client is down and shows a 403 Forbidden error, the issue is already reported on [Zoom forum](https://devforum.zoom.us/t/zoom-web-client-is-down/10829)
* Fixed: Prevent blank screen due to fatal error on activating base plugin along with this plugin
* Fixed: README.md updated for working with Git repository, a Git repo is created for the plugin for version tracking and bug reporting via Github.
Please report the bugs and issues from now on the Github repo [here](https://github.com/elearning-evolve/zoom-wordpress-integration) 
* Fixed: End/Resume Meeting button on backend meeting list now ends/starts Zoom meeting
* Fixed: Add browser compatibility for fullscreen option in Zoom meeting window
* Fixed: Report Functionality fixed for Viewing All Meetings Report

* Added: Display meeting status on meeting list page
* Added: Helpful notes pointing to Prerequisites of User management & Reports section
* Added: Option to Subscribe for Important updates from Zoom Meetings -> Subscribe
* Added: Translation files to translate text in Italian (translation credits: Antonio Graziano).
* Added: Added Option to manage Width and Height of Zoom iFrame Window through Zoom Meetings ->Settings.

= 3.1.2 =
* Fixed: (The most requested one) Zoom Join Via App link not working
* Added: (The most requested one) The ability for Host/Co-host to join the meeting from the plugin Zoom window
* Added: Support for Alternative Host to start the meeting like a Host (Not tested)
* Added: Re-Enabled the user management section in the plugin to give the ability to create Alternative hosts from the plugin.
Please note that in order to use the plugin's user management area you should be able to access this link from your Zoom account (https://zoom.us/account/user)
It is accessible only for Free account(with Credit Card added), Pro, Business, Education, or Enterprise account
* Trick: Recieved a lot of requests from users about the ability for Co-Host to start the meeting without the HOST.
  This can be done by checking -> Join Before Host check on the plugin Zoom meeting edit page.

* Added: Option to add your theme specific CSS classes to buttons from plugin Settings
* Added: Ability to change text on the alternative meeting button from plugin Settings

= 3.1.1 =
* Added: Action(video_conferencing_zoom_before_render_window) and Filter(video_conferencing_zoom_before_window_content) to extend the plugin
* Fixed: Prevent meeting host from being redirected to Zoom on the meeting page
* Fixed: Resolve issues with Audio not working for meeting particpants on Chrome browser <br />
[Blog post to address Commonly occuring Audio and Video Issues in Zoom Meeting](https://elearningevolve.com/blog/audio-video-issues-zoom-meeting)

= 3.1.0 =
* Fixed: Added work around for the Chrome incompatibility issue preventing Zoom window to work on WordPress page
* Added: Added option to disable plugin link share notice on admin
[Full details about this release here](https://elearningevolve.com/blog/zoom-integration-with-wordpress-v3-1-0/)

= 3.0.9 =
* Added: Add Chrome incompatibility notice above meeting window and alternative link to join meeting
* Added: Option on settings page to enable/disable notice text above Zoom window <br />
[Full details about this release here](https://elearningevolve.com/blog/wordpress-zoom-integration-shortcode-not-working-after-recent-chrome-version-update-80-0-3987-132/)

= 3.0.8 =
* Added: Option on settings page to enable/disable help text above Zoom window
* Added: Show Zoom window shortcode on adminn Zoom meeting edit page

* Fixed: Prevent plugin assets loading on all frontend pages
* Fixed: Replaced fatal error displayed on plugin activation due to previously installed basic version with helpful text

= 3.0.7 =
* Fixed: Timeout issue on plugin page and fix slow loading backend

= 3.0.6 =
* Added: Translation files to translate text in Hebrew (translation credits: Asaf Epshtain)
* Fixed: Make text translatable on settings page

= 3.0.5 =
* Added: Support for RTL language.
* Added: Zoom API keys generation link on the settings page.
* Fixed: The meeting countdown timer is now compatible with RTL languages.

= 3.0.4 =
* Added: Multi lingual support in the plugin.
* Added: Translation files to translate text in Dutch (translation credits: Ingo Ahnfeldt)

= 3.0.3 =
* Fixed: Styling issues on mobile & tablet devices.
* Added: Download Zoom App links incase Zoom meeting window doesn't work.

= 3.0.2 =
* Fixed: Styling issue for Zoom window on mobile.
* Added: Support for joining meeting directly from WordPress page on mobile/tablet
* Added: Show Zoom App download buttons on mobile/tablet

= 3.0.1 =
* Added: Support for restricting access to logged-in WordPress users
* Fixed: Redirect users to join the meeting page directly without clicking "join from the browser" in the Zoom window.
