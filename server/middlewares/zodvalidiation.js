const zod = require("zod");

const registrationPaload = zod
  .object({
    name: zod.string(),
    email: zod.string().email(),
    phone: zod.string().max(32, "Number cannot be so long"),
    password: zod.string().min(8, "Password must be at least 8 characters").regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      )
  })
  .required();
