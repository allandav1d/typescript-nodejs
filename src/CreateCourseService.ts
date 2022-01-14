interface Course {
  name: string;
  duration?: number;
  educator: string
}

class CreateCourseService {
  execute({ name, duration = 0, educator }: Course) {
    console.log(`Creating course ${name} with duration ${duration} and educator ${educator}`);
  }
}

export default new CreateCourseService();