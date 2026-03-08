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
    interface UserProps extends PersonProps {
        email: string;
        role: string;

    }
    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;
        constructor({
            birthdate,
            email,
            gender,
            name,
            role
        }: UserProps
        ) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
        checkCredentials() {
            return true;
        }
    }
    interface UserSettingsProps extends UserProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }
    class UserSettings extends User {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }: UserSettingsProps

        ) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }
    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'sergio@google.com',
        role: 'Admin',
        name: 'Sergio',
        gender: 'M',
        birthdate: new Date('1996-06-21')
    }
    )
    console.log({ userSettings });

})()