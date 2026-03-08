
(() => {
    type Gender = 'M' | 'F';
    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }
    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;

    }

    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;
        constructor({
            email,
            role
        }: UserProps
        ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
        checkCredentials() {
            return true;
        }
    }
    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }
    class Settings {

        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({
            lastOpenFolder,
            workingDirectory,
        }: SettingsProps

        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }
    interface UserSettingsProps {
        person: Person;
        user: User;
        settings: Settings
    }
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({ person, user, settings }: UserSettingsProps) {
            this.person = person;
            this.user = user;
            this.settings = settings;
        }
    }
    const userSettings = new UserSettings({ 
        person: new Person({ name: 'Sergio', gender: 'M', birthdate: new Date('1996-06-21') }) ,
        user: new User({email:'sergio@google.com',role: 'Admin'}),
        settings: new Settings({lastOpenFolder: 'home',workingDirectory: '/usr/home'})
    })
    console.log({userSettings}, userSettings.user.checkCredentials());
    
})()