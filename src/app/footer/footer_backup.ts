export class Footer_Backup
{
    constructor()
    {
        const frameworks = ['Angular', 'Bootstrap', 'TypeScript', 'Node.js'];
        const framework_links =
        {
            angular: 'https://angular.dev',
            bootstrap: 'https://getbootstrap.com',
            typescript: 'https://www.typescriptlang.org',
            nodejs: 'https://nodejs.org',
        }
        const utils = ['TMDB-API', 'Font-Awesome', 'Bootstrap Icons'];
        const util_links =
        {
            tmdb: 'https://www.themoviedb.org',
            fontawesome: 'https://fontawesome.com',
            bootstrap_icons: 'https://icons.getbootstrap.com',
        }
    }
    getLink(type: 'angular' | 'bootstrap'): string
    {
        const links = 
        {
            angular: 'https://angular.dev',
            bootstrap: 'https://getbootstrap.com',
        };
        return links[type];
    }
    displayYear(): number
    {
        const year = new Date().getFullYear();
        return year;
    }
}