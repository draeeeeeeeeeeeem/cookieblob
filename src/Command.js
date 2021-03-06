/** @module */

const Permissions = require("./Permissions");

module.exports = /** @class */ class Command {
    /**
     * @param {Object} command 
     */
    constructor(command) {
        /**
         * @type {String}
         */
        this.name = command.name;
        /**
         * @type {String}
         */
        this.description = command.description;
        /**
         * @type {String[]}
         */
        this.usage = command.usage;
        /**
         * @type {String}
         */
        this.permissionLevel = command.permissionLevel;
        /**
         * @type {Boolean}
         */
        this.guildOnly = command.guildOnly;
        /**
         * @type {AsyncFunction}
         */
        this.run = command.run;
        if (!Permissions.isValidPermission(this.permissionLevel)) {
            this.run = (cookieblob, msg, args) => {throw new Error("This command has a invalid permission and could not be safely executed.")};
        }
    }
    /** 
     * @returns {String} The formatted command usage.
    */
    formatCommand() {
        return `${this.name} ${this.usage.map(usageEntry => `<${usageEntry}>`).join(" ")}`;
    }
    /** 
     * @returns {String} The formatted permission level.
    */
    formatPermissionLevel() {
        return this.permissionLevel.toString().slice(7, this.permissionLevel.toString().length - 1);
    }
}