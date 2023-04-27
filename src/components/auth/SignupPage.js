import axios from "axios";
import Button from "../common/Button";
import { useState } from "react";

function SignupPage({ onSignup }) {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      username: "",
      name: "",
    });
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post("/api/auth/signup", formData);
  
        if (response.status === 200) {
          onSignup(true);
        } else {
          alert("Error registering. Please try again.");
        }
      } catch (error) {
        alert("Error registering. Please try again.");
      }
    };
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    return (
      <div>
        <h1>Sign up for Communityshop</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" variant="primary">
            Sign up
          </Button>
        </form>
      </div>
    );
  }
  
  export default SignupPage;