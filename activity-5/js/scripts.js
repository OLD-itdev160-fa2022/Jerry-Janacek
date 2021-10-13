(function(){
    var data = [
        {
            name: 'Settings Sync',
            description: 'Synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions Across Multiple Machines Using GitHub Gist.',
            author: 'Shan Khan',
            downloads: '2,775,928',
            stars: '5',
            selector: 'p1'
        },
        {
            name: 'HTML Snippets',
            description: 'Full HTML tags including HTML5 Snippets',
            author: 'Mohamed Abusaid',
            downloads: '6,081,036',
            stars: '5',
            selector: 'p2'  
        }
    ];

    //package constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };

    }

    

    //utility functions
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    }

    var getEl = function(id) {
        return document.getElementById(id);
    }

    //write package data
    var writePackageInfo = function(package) {
        //get references to elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');
        //write data to elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var settingsSync = new Package(data[0]);
    writePackageInfo(settingsSync);

    var htmlSnippets = new Package(data[1]);
    writePackageInfo(htmlSnippets);
})();

