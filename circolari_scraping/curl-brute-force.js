var exec = require('child_process').exec;
var fs = require("fs");

var req_page = 0;

var xx = "'https://www.itiszuccante.gov.it/views/ajax' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Referer: https://www.itiszuccante.gov.it/categoria/circolari' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' -H 'Cookie: has_js=1; __eucookielaw=true' -H 'TE: Trailers' --data 'view_name=circolari&view_display_id=page&view_args=&view_path=taxonomy%2Fterm%2F27&view_base_path=taxonomy%2Fterm%2F27&view_dom_id=18036d8589e6263bc0e0345e0894d689&pager_element=0&page="+req_page+"&ajax_html_ids%5B%5D=genesis-1c&ajax_html_ids%5B%5D=skip-link&ajax_html_ids%5B%5D=container&ajax_html_ids%5B%5D=leaderboard&ajax_html_ids%5B%5D=block-menu-menu-servizio&ajax_html_ids%5B%5D=header&ajax_html_ids%5B%5D=branding&ajax_html_ids%5B%5D=logo&ajax_html_ids%5B%5D=header-blocks&ajax_html_ids%5B%5D=block-search-form&ajax_html_ids%5B%5D=search-block-form&ajax_html_ids%5B%5D=edit-search-block-form--2&ajax_html_ids%5B%5D=edit-actions&ajax_html_ids%5B%5D=edit-submit&ajax_html_ids%5B%5D=main-menu-wrapper&ajax_html_ids%5B%5D=superfish-1&ajax_html_ids%5B%5D=menu-246-1&ajax_html_ids%5B%5D=menu-9545-1&ajax_html_ids%5B%5D=menu-9547-1&ajax_html_ids%5B%5D=menu-9549-1&ajax_html_ids%5B%5D=menu-11820-1&ajax_html_ids%5B%5D=menu-9548-1&ajax_html_ids%5B%5D=menu-9551-1&ajax_html_ids%5B%5D=menu-9558-1&ajax_html_ids%5B%5D=menu-9559-1&ajax_html_ids%5B%5D=menu-9560-1&ajax_html_ids%5B%5D=menu-11818-1&ajax_html_ids%5B%5D=menu-11817-1&ajax_html_ids%5B%5D=menu-9562-1&ajax_html_ids%5B%5D=menu-9552-1&ajax_html_ids%5B%5D=menu-9563-1&ajax_html_ids%5B%5D=menu-9564-1&ajax_html_ids%5B%5D=menu-9565-1&ajax_html_ids%5B%5D=menu-9566-1&ajax_html_ids%5B%5D=menu-9556-1&ajax_html_ids%5B%5D=menu-9557-1&ajax_html_ids%5B%5D=menu-10063-1&ajax_html_ids%5B%5D=menu-9555-1&ajax_html_ids%5B%5D=menu-11825-1&ajax_html_ids%5B%5D=menu-11829-1&ajax_html_ids%5B%5D=menu-10160-1&ajax_html_ids%5B%5D=menu-9664-1&ajax_html_ids%5B%5D=menu-10164-1&ajax_html_ids%5B%5D=menu-11816-1&ajax_html_ids%5B%5D=menu-11821-1&ajax_html_ids%5B%5D=menu-11826-1&ajax_html_ids%5B%5D=menu-9568-1&ajax_html_ids%5B%5D=menu-9570-1&ajax_html_ids%5B%5D=menu-9569-1&ajax_html_ids%5B%5D=menu-9572-1&ajax_html_ids%5B%5D=menu-9573-1&ajax_html_ids%5B%5D=menu-11819-1&ajax_html_ids%5B%5D=menu-12345-1&ajax_html_ids%5B%5D=menu-11808-1&ajax_html_ids%5B%5D=secondary-content&ajax_html_ids%5B%5D=block-menu-menu-persone&ajax_html_ids%5B%5D=columns&ajax_html_ids%5B%5D=content-column&ajax_html_ids%5B%5D=main-content&ajax_html_ids%5B%5D=custom-breadcrumbs-home&ajax_html_ids%5B%5D=page-title&ajax_html_ids%5B%5D=content&ajax_html_ids%5B%5D=block-print_ui-print-links&ajax_html_ids%5B%5D=block-system-main&ajax_html_ids%5B%5D=views-exposed-form-circolari-page&ajax_html_ids%5B%5D=edit-field-anno-scolastico-value-wrapper&ajax_html_ids%5B%5D=edit-field-anno-scolastico-value&ajax_html_ids%5B%5D=edit-field-mese-value-wrapper&ajax_html_ids%5B%5D=edit-field-mese-value&ajax_html_ids%5B%5D=edit-title-wrapper&ajax_html_ids%5B%5D=edit-title&ajax_html_ids%5B%5D=edit-submit-circolari&ajax_html_ids%5B%5D=edit-reset&ajax_html_ids%5B%5D=sidebar-first&ajax_html_ids%5B%5D=block-views-circolari-block&ajax_html_ids%5B%5D=block-block-20&ajax_html_ids%5B%5D=block-menu-menu-didattica&ajax_html_ids%5B%5D=dhtml_menu-11822&ajax_html_ids%5B%5D=dhtml_menu-9571&ajax_html_ids%5B%5D=dhtml_menu-12261&ajax_html_ids%5B%5D=block-menu-menu-indirizzi-di-studio&ajax_html_ids%5B%5D=dhtml_menu-11715&ajax_html_ids%5B%5D=dhtml_menu-11716&ajax_html_ids%5B%5D=dhtml_menu-10066&ajax_html_ids%5B%5D=dhtml_menu-10161&ajax_html_ids%5B%5D=dhtml_menu-10065&ajax_html_ids%5B%5D=dhtml_menu-10162&ajax_html_ids%5B%5D=dhtml_menu-11804&ajax_html_ids%5B%5D=dhtml_menu-11805&ajax_html_ids%5B%5D=dhtml_menu-11806&ajax_html_ids%5B%5D=block-block-14&ajax_html_ids%5B%5D=sidebar-second&ajax_html_ids%5B%5D=block-block-21&ajax_html_ids%5B%5D=block-block-15&ajax_html_ids%5B%5D=block-panels_mini-in_evidenza&ajax_html_ids%5B%5D=mini-panel-in_evidenza&ajax_html_ids%5B%5D=block-block-4&ajax_html_ids%5B%5D=block-block-28&ajax_html_ids%5B%5D=footer&ajax_html_ids%5B%5D=block-menu_block-19&ajax_html_ids%5B%5D=block-block-8&ajax_html_ids%5B%5D=block-menu-menu-note-legali&ajax_html_ids%5B%5D=block-menu-menu-utilit-&ajax_html_ids%5B%5D=tertiary-content&ajax_html_ids%5B%5D=block-block-2&ajax_html_ids%5B%5D=cboxOverlay&ajax_html_ids%5B%5D=colorbox&ajax_html_ids%5B%5D=cboxWrapper&ajax_html_ids%5B%5D=cboxTopLeft&ajax_html_ids%5B%5D=cboxTopCenter&ajax_html_ids%5B%5D=cboxTopRight&ajax_html_ids%5B%5D=cboxMiddleLeft&ajax_html_ids%5B%5D=cboxContent&ajax_html_ids%5B%5D=cboxTitle&ajax_html_ids%5B%5D=cboxCurrent&ajax_html_ids%5B%5D=cboxPrevious&ajax_html_ids%5B%5D=cboxNext&ajax_html_ids%5B%5D=cboxSlideshow&ajax_html_ids%5B%5D=cboxLoadingOverlay&ajax_html_ids%5B%5D=cboxLoadingGraphic&ajax_html_ids%5B%5D=cboxMiddleRight&ajax_html_ids%5B%5D=cboxBottomLeft&ajax_html_ids%5B%5D=cboxBottomCenter&ajax_html_ids%5B%5D=cboxBottomRight&ajax_page_state%5Btheme%5D=PASW_SUBTHEME_responsive&ajax_page_state%5Btheme_token%5D=eZFilhJv5B-7RV2l27izILqIBi8dZ_IwTb124D_0S6s&ajax_page_state%5Bcss%5D%5Bmodules%2Fsystem%2Fsystem.base.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fsystem%2Fsystem.menus.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fsystem%2Fsystem.messages.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fsystem%2Fsystem.theme.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Faggregator%2Faggregator.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fcalendar%2Fcss%2Fcalendar_multiday.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fcalendar_tooltips%2Fcalendar_tooltips.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fcomment%2Fcomment.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fdate%2Fdate_api%2Fdate.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fdate%2Fdate_popup%2Fthemes%2Fdatepicker.1.7.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Ffield%2Ftheme%2Ffield.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fnode%2Fnode.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fsearch%2Fsearch.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fuser%2Fuser.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fviews%2Fcss%2Fviews.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fckeditor%2Fcss%2Fckeditor.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Facknowledgements%2Fstylesheet.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fcolorbox%2Fstyles%2Fdefault%2Fcolorbox_style.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fctools%2Fcss%2Fctools.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fdhtml_menu%2Fdhtml_menu.css%5D=1&ajax_page_state%5Bcss%5D%5Bpublic%3A%2F%2Fcss%2Fmenu_icons.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fpanels%2Fcss%2Fpanels.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Ftagclouds%2Ftagclouds.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fpanels%2Fplugins%2Flayouts%2Fonecol%2Fonecol.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fprint%2Fprint_ui%2Fcss%2Fprint_ui.theme.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fnode_embed%2Fplugins%2Fnode_embed%2Fnode_embed.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fresponsive_menus%2Fstyles%2FmeanMenu%2Fmeanmenu.min.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fie%2Fie-lte-7.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fcss%2Fsuperfish.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fstyle%2Fsimple%2Fsimple-custom.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2Fgenesis%2Fcss%2Flayout.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2Fgenesis%2Fcss%2Fadmin-styles.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-core%2Fsystem.base.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-core%2Fsystem.theme.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-core%2Fjquery.ui.core.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fjquery_update%2Freplace%2Fui%2Fthemes%2Fbase%2Fminified%2Fjquery.ui.theme.min.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fjquery_update%2Freplace%2Fui%2Fthemes%2Fbase%2Fminified%2Fjquery.ui.dialog.min.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fquicktabs%2Fquicktabs_tabstyles%2Ftabstyles%2Fexcel%2Fexcel.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fcolorbox_default_style.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fcalendar_multiday.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Ftagclouds.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fnode_embed%2Fplugins%2Fnode_embed%2Fnode_embed.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fhtml-elements.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fpage.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Ffields.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fnodes.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fblocks.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fcomments.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fnavigation.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fviews-styles.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fcustom.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Flibraries%2Feucookielaw%2Feucookielaw.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Feu_cookie_law%2Feu_cookie_law.css%5D=1&ajax_page_state%5Bjs%5D%5B0%5D=1&ajax_page_state%5Bjs%5D%5B1%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Feucookielaw%2FEUCookieLaw.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Feu_cookie_law%2Feu_cookie_law_util.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fjquery_update%2Freplace%2Fjquery%2F1.7%2Fjquery.min.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fjquery.once.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fdrupal.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Feu_cookie_law%2Fjs.cookie.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fjquery_update%2Freplace%2Fui%2Fexternal%2Fjquery.cookie.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fjquery_update%2Freplace%2Fmisc%2Fjquery.form.min.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fbeautytips%2Fjs%2Fjquery.bt.min.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fbeautytips%2Fjs%2Fbeautytips.min.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fbeautytips%2Fother_libs%2Fexcanvas_r3%2Fexcanvas.compiled.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fform.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fajax.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fjquery_update%2Fjs%2Fjquery_update.js%5D=1&ajax_page_state%5Bjs%5D%5Bpublic%3A%2F%2Flanguages%2Fit_zBERC1ENA1xn9-Tj1GJeY9tsj7tLj6gGucOzgHO95aE.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fcolorbox%2Fjquery.colorbox-min.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fcolorbox%2Fjs%2Fcolorbox.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fcolorbox%2Fstyles%2Fdefault%2Fcolorbox_style.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fdhtml_menu%2Fdhtml_menu.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fviews%2Fjs%2Fbase.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fprogress.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fviews%2Fjs%2Fajax_view.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fresponsive_menus%2Fstyles%2FmeanMenu%2Fjquery.meanmenu.min.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fresponsive_menus%2Fstyles%2FmeanMenu%2Fresponsive_menus_mean_menu.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fcollapse.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fjquery.hoverIntent.minified.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fsftouchscreen.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fsfsmallscreen.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fsupposition.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fsuperfish.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fsupersubs.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fsuperfish%2Fsuperfish.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fmyquicktabs.js%5D=1&ajax_page_state%5Bjquery_version%5D=1.7'";

var limit = 57;

//brute force proprio xD

function getReq(){
    exec('curl ' + xx, function (error, stdout, stderr) {
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }

        var obj = JSON.parse(stdout);

        var str = JSON.stringify(obj[2].data);

        while(str.indexOf('\\"') != -1)
            str = str.replace('\\"',"\"");

        console.log('\\"');

        while(str.indexOf('\\n') != -1)
            str = str.replace('\\n',"");

        var str = str.replace("Anno scolastico");
        var idel = str.indexOf("Anno scolastico");

        str = str.substring(idel,str.length-1);

        fs.writeFile("crude/temp"+req_page+".html", str, function(err, data) {
            if (err) console.log(err);
            console.log("Successfully Written to File." + "temp"+req_page+".html");

            if(req_page != limit){
                upgrade();
                getReq();
            }
        });
    
    });

}

getReq();
   

function upgrade(){

     req_page++;

     xx = "'https://www.itiszuccante.gov.it/views/ajax' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Referer: https://www.itiszuccante.gov.it/categoria/circolari' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' -H 'Cookie: has_js=1; __eucookielaw=true' -H 'TE: Trailers' --data 'view_name=circolari&view_display_id=page&view_args=&view_path=taxonomy%2Fterm%2F27&view_base_path=taxonomy%2Fterm%2F27&view_dom_id=18036d8589e6263bc0e0345e0894d689&pager_element=0&page="+req_page+"&ajax_html_ids%5B%5D=genesis-1c&ajax_html_ids%5B%5D=skip-link&ajax_html_ids%5B%5D=container&ajax_html_ids%5B%5D=leaderboard&ajax_html_ids%5B%5D=block-menu-menu-servizio&ajax_html_ids%5B%5D=header&ajax_html_ids%5B%5D=branding&ajax_html_ids%5B%5D=logo&ajax_html_ids%5B%5D=header-blocks&ajax_html_ids%5B%5D=block-search-form&ajax_html_ids%5B%5D=search-block-form&ajax_html_ids%5B%5D=edit-search-block-form--2&ajax_html_ids%5B%5D=edit-actions&ajax_html_ids%5B%5D=edit-submit&ajax_html_ids%5B%5D=main-menu-wrapper&ajax_html_ids%5B%5D=superfish-1&ajax_html_ids%5B%5D=menu-246-1&ajax_html_ids%5B%5D=menu-9545-1&ajax_html_ids%5B%5D=menu-9547-1&ajax_html_ids%5B%5D=menu-9549-1&ajax_html_ids%5B%5D=menu-11820-1&ajax_html_ids%5B%5D=menu-9548-1&ajax_html_ids%5B%5D=menu-9551-1&ajax_html_ids%5B%5D=menu-9558-1&ajax_html_ids%5B%5D=menu-9559-1&ajax_html_ids%5B%5D=menu-9560-1&ajax_html_ids%5B%5D=menu-11818-1&ajax_html_ids%5B%5D=menu-11817-1&ajax_html_ids%5B%5D=menu-9562-1&ajax_html_ids%5B%5D=menu-9552-1&ajax_html_ids%5B%5D=menu-9563-1&ajax_html_ids%5B%5D=menu-9564-1&ajax_html_ids%5B%5D=menu-9565-1&ajax_html_ids%5B%5D=menu-9566-1&ajax_html_ids%5B%5D=menu-9556-1&ajax_html_ids%5B%5D=menu-9557-1&ajax_html_ids%5B%5D=menu-10063-1&ajax_html_ids%5B%5D=menu-9555-1&ajax_html_ids%5B%5D=menu-11825-1&ajax_html_ids%5B%5D=menu-11829-1&ajax_html_ids%5B%5D=menu-10160-1&ajax_html_ids%5B%5D=menu-9664-1&ajax_html_ids%5B%5D=menu-10164-1&ajax_html_ids%5B%5D=menu-11816-1&ajax_html_ids%5B%5D=menu-11821-1&ajax_html_ids%5B%5D=menu-11826-1&ajax_html_ids%5B%5D=menu-9568-1&ajax_html_ids%5B%5D=menu-9570-1&ajax_html_ids%5B%5D=menu-9569-1&ajax_html_ids%5B%5D=menu-9572-1&ajax_html_ids%5B%5D=menu-9573-1&ajax_html_ids%5B%5D=menu-11819-1&ajax_html_ids%5B%5D=menu-12345-1&ajax_html_ids%5B%5D=menu-11808-1&ajax_html_ids%5B%5D=secondary-content&ajax_html_ids%5B%5D=block-menu-menu-persone&ajax_html_ids%5B%5D=columns&ajax_html_ids%5B%5D=content-column&ajax_html_ids%5B%5D=main-content&ajax_html_ids%5B%5D=custom-breadcrumbs-home&ajax_html_ids%5B%5D=page-title&ajax_html_ids%5B%5D=content&ajax_html_ids%5B%5D=block-print_ui-print-links&ajax_html_ids%5B%5D=block-system-main&ajax_html_ids%5B%5D=views-exposed-form-circolari-page&ajax_html_ids%5B%5D=edit-field-anno-scolastico-value-wrapper&ajax_html_ids%5B%5D=edit-field-anno-scolastico-value&ajax_html_ids%5B%5D=edit-field-mese-value-wrapper&ajax_html_ids%5B%5D=edit-field-mese-value&ajax_html_ids%5B%5D=edit-title-wrapper&ajax_html_ids%5B%5D=edit-title&ajax_html_ids%5B%5D=edit-submit-circolari&ajax_html_ids%5B%5D=edit-reset&ajax_html_ids%5B%5D=sidebar-first&ajax_html_ids%5B%5D=block-views-circolari-block&ajax_html_ids%5B%5D=block-block-20&ajax_html_ids%5B%5D=block-menu-menu-didattica&ajax_html_ids%5B%5D=dhtml_menu-11822&ajax_html_ids%5B%5D=dhtml_menu-9571&ajax_html_ids%5B%5D=dhtml_menu-12261&ajax_html_ids%5B%5D=block-menu-menu-indirizzi-di-studio&ajax_html_ids%5B%5D=dhtml_menu-11715&ajax_html_ids%5B%5D=dhtml_menu-11716&ajax_html_ids%5B%5D=dhtml_menu-10066&ajax_html_ids%5B%5D=dhtml_menu-10161&ajax_html_ids%5B%5D=dhtml_menu-10065&ajax_html_ids%5B%5D=dhtml_menu-10162&ajax_html_ids%5B%5D=dhtml_menu-11804&ajax_html_ids%5B%5D=dhtml_menu-11805&ajax_html_ids%5B%5D=dhtml_menu-11806&ajax_html_ids%5B%5D=block-block-14&ajax_html_ids%5B%5D=sidebar-second&ajax_html_ids%5B%5D=block-block-21&ajax_html_ids%5B%5D=block-block-15&ajax_html_ids%5B%5D=block-panels_mini-in_evidenza&ajax_html_ids%5B%5D=mini-panel-in_evidenza&ajax_html_ids%5B%5D=block-block-4&ajax_html_ids%5B%5D=block-block-28&ajax_html_ids%5B%5D=footer&ajax_html_ids%5B%5D=block-menu_block-19&ajax_html_ids%5B%5D=block-block-8&ajax_html_ids%5B%5D=block-menu-menu-note-legali&ajax_html_ids%5B%5D=block-menu-menu-utilit-&ajax_html_ids%5B%5D=tertiary-content&ajax_html_ids%5B%5D=block-block-2&ajax_html_ids%5B%5D=cboxOverlay&ajax_html_ids%5B%5D=colorbox&ajax_html_ids%5B%5D=cboxWrapper&ajax_html_ids%5B%5D=cboxTopLeft&ajax_html_ids%5B%5D=cboxTopCenter&ajax_html_ids%5B%5D=cboxTopRight&ajax_html_ids%5B%5D=cboxMiddleLeft&ajax_html_ids%5B%5D=cboxContent&ajax_html_ids%5B%5D=cboxTitle&ajax_html_ids%5B%5D=cboxCurrent&ajax_html_ids%5B%5D=cboxPrevious&ajax_html_ids%5B%5D=cboxNext&ajax_html_ids%5B%5D=cboxSlideshow&ajax_html_ids%5B%5D=cboxLoadingOverlay&ajax_html_ids%5B%5D=cboxLoadingGraphic&ajax_html_ids%5B%5D=cboxMiddleRight&ajax_html_ids%5B%5D=cboxBottomLeft&ajax_html_ids%5B%5D=cboxBottomCenter&ajax_html_ids%5B%5D=cboxBottomRight&ajax_page_state%5Btheme%5D=PASW_SUBTHEME_responsive&ajax_page_state%5Btheme_token%5D=eZFilhJv5B-7RV2l27izILqIBi8dZ_IwTb124D_0S6s&ajax_page_state%5Bcss%5D%5Bmodules%2Fsystem%2Fsystem.base.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fsystem%2Fsystem.menus.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fsystem%2Fsystem.messages.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fsystem%2Fsystem.theme.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Faggregator%2Faggregator.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fcalendar%2Fcss%2Fcalendar_multiday.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fcalendar_tooltips%2Fcalendar_tooltips.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fcomment%2Fcomment.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fdate%2Fdate_api%2Fdate.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fdate%2Fdate_popup%2Fthemes%2Fdatepicker.1.7.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Ffield%2Ftheme%2Ffield.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fnode%2Fnode.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fsearch%2Fsearch.css%5D=1&ajax_page_state%5Bcss%5D%5Bmodules%2Fuser%2Fuser.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fviews%2Fcss%2Fviews.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fckeditor%2Fcss%2Fckeditor.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Facknowledgements%2Fstylesheet.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fcolorbox%2Fstyles%2Fdefault%2Fcolorbox_style.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fctools%2Fcss%2Fctools.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fdhtml_menu%2Fdhtml_menu.css%5D=1&ajax_page_state%5Bcss%5D%5Bpublic%3A%2F%2Fcss%2Fmenu_icons.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fpanels%2Fcss%2Fpanels.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Ftagclouds%2Ftagclouds.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fpanels%2Fplugins%2Flayouts%2Fonecol%2Fonecol.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fprint%2Fprint_ui%2Fcss%2Fprint_ui.theme.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fnode_embed%2Fplugins%2Fnode_embed%2Fnode_embed.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Fresponsive_menus%2Fstyles%2FmeanMenu%2Fmeanmenu.min.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fie%2Fie-lte-7.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fcss%2Fsuperfish.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fstyle%2Fsimple%2Fsimple-custom.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2Fgenesis%2Fcss%2Flayout.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2Fgenesis%2Fcss%2Fadmin-styles.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-core%2Fsystem.base.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-core%2Fsystem.theme.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-core%2Fjquery.ui.core.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fjquery_update%2Freplace%2Fui%2Fthemes%2Fbase%2Fminified%2Fjquery.ui.theme.min.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fjquery_update%2Freplace%2Fui%2Fthemes%2Fbase%2Fminified%2Fjquery.ui.dialog.min.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fquicktabs%2Fquicktabs_tabstyles%2Ftabstyles%2Fexcel%2Fexcel.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fcolorbox_default_style.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fcalendar_multiday.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Ftagclouds.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss-moduli-agg%2Fnode_embed%2Fplugins%2Fnode_embed%2Fnode_embed.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fhtml-elements.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fpage.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Ffields.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fnodes.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fblocks.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fcomments.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fnavigation.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fviews-styles.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fcss%2Fcustom.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Flibraries%2Feucookielaw%2Feucookielaw.css%5D=1&ajax_page_state%5Bcss%5D%5Bsites%2Fall%2Fmodules%2Feu_cookie_law%2Feu_cookie_law.css%5D=1&ajax_page_state%5Bjs%5D%5B0%5D=1&ajax_page_state%5Bjs%5D%5B1%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Feucookielaw%2FEUCookieLaw.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Feu_cookie_law%2Feu_cookie_law_util.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fjquery_update%2Freplace%2Fjquery%2F1.7%2Fjquery.min.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fjquery.once.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fdrupal.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Feu_cookie_law%2Fjs.cookie.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fjquery_update%2Freplace%2Fui%2Fexternal%2Fjquery.cookie.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fjquery_update%2Freplace%2Fmisc%2Fjquery.form.min.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fbeautytips%2Fjs%2Fjquery.bt.min.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fbeautytips%2Fjs%2Fbeautytips.min.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fbeautytips%2Fother_libs%2Fexcanvas_r3%2Fexcanvas.compiled.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fform.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fajax.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fjquery_update%2Fjs%2Fjquery_update.js%5D=1&ajax_page_state%5Bjs%5D%5Bpublic%3A%2F%2Flanguages%2Fit_zBERC1ENA1xn9-Tj1GJeY9tsj7tLj6gGucOzgHO95aE.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fcolorbox%2Fjquery.colorbox-min.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fcolorbox%2Fjs%2Fcolorbox.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fcolorbox%2Fstyles%2Fdefault%2Fcolorbox_style.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fdhtml_menu%2Fdhtml_menu.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fviews%2Fjs%2Fbase.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fprogress.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fviews%2Fjs%2Fajax_view.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fresponsive_menus%2Fstyles%2FmeanMenu%2Fjquery.meanmenu.min.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fresponsive_menus%2Fstyles%2FmeanMenu%2Fresponsive_menus_mean_menu.js%5D=1&ajax_page_state%5Bjs%5D%5Bmisc%2Fcollapse.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fjquery.hoverIntent.minified.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fsftouchscreen.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fsfsmallscreen.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fsupposition.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fsuperfish.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Flibraries%2Fsuperfish%2Fsupersubs.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fmodules%2Fsuperfish%2Fsuperfish.js%5D=1&ajax_page_state%5Bjs%5D%5Bsites%2Fall%2Fthemes%2FPASW_SUBTHEME_responsive%2Fmyquicktabs.js%5D=1&ajax_page_state%5Bjquery_version%5D=1.7'";
}