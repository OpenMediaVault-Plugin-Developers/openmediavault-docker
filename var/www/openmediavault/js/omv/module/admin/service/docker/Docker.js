/**
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    OpenMediaVault Plugin Developers
 * @copyright Copyright (c) 2013-2014 OpenMediaVault Plugin Developers
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
// require("js/omv/WorkspaceManager.js")
// require("js/omv/workspace/panel/Panel.js")

Ext.define("OMV.module.admin.service.docker.Info", {
    extend : "Ext.panel.Panel",

    initComponent : function() {
        var me = this;

        me.html = "<ul>" +
                    "<li><a href='/dockerui/' target='_blank'>" + _("Open in a new window") + "</a></li>" +
                  "</ul>";

        me.callParent(arguments);
    }
});

Ext.define("OMV.module.admin.service.docker.Interface", {
    extend : "Ext.panel.Panel",

    initComponent : function() {
        var me = this;

        me.html = "<iframe src='/dockerui/' name='docker' longsec='docker' width='100%' height='100%' />";
        me.callParent(arguments);
    }
});

OMV.WorkspaceManager.registerNode({
    id      : "docker",
    path    : "/service",
    text    : _("docker"),
    icon16  : "images/docker.png",
    iconSvg : "images/docker.svg"
});

OMV.WorkspaceManager.registerPanel({
    id        : "interface",
    path      : "/service/docker",
    text      : _("docker"),
    position  : 10,
    className : "OMV.module.admin.service.docker.Interface"
});

OMV.WorkspaceManager.registerPanel({
    id        : "info",
    path      : "/service/docker",
    text      : _("Information"),
    position  : 20,
    className : "OMV.module.admin.service.docker.Info"
});
