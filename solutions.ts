 
const multiplyValue = (value: number, multiplier = 2): number => {
  return value * multiplier;
};

const multiplyValueUser = multiplyValue(10, 2);



const processInput = (input: string | number | boolean) => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};


const processInputValue = processInput(true)


const formatCoordinate = (coord: readonly [number, number, string]): string => {
  return `Location: ${coord[2]} (${coord[0]}, ${coord[1]})`;
};

const CoordinateValue =  formatCoordinate([23.81, 90.41, "Dhaka"])




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return ([] as T[]).concat(...arrays);
};

concatenateArrays(["a", "b"], ["c", "d"])
concatenateArrays([1, 2], [3, 4], [5])



interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  return courses.filter((course) => course.isPublished && course.students >= minStudents);
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

getPopularCourses(courses, 80)



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

pluckValues(users, "name")
pluckValues(users, "id")


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  public getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();



const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};

const testAgeValidation = async () => {
  try {
    console.log("Checking age 20...");
    const result1 = await validateAgeAsync(20);
    console.log(result1); 
  } catch (error: any) {
    console.error(error.message);
  }

  try {
    console.log("Checking age 15...");
    const result2 = await validateAgeAsync(15);
    console.log(result2);
  } catch (error: any) {
    console.error(error.message);
  }
};

testAgeValidation();