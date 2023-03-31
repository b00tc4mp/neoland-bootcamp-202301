const registerUser = require('./registerUser')
const checkFileExists = require('../utils/checkFileExists')
const fs = require('fs')
const { expect } = require('chai')

// Tests that the function successfully registers a new user with valid parameters. tags: [happy path]
test("test_valid_parameters", async () => {
    const mockUser = {
        name: "John Doe",
        nationalId: "123456789",
        role: "client",
        address: "123 Main St",
        zipCode: "12345",
        city: "Anytown",
        province: "Anyprovince",
        phone: "555-555-5555",
        email: "johndoe@example.com",
        password: "password123"
    }
    const mockUserSave = jest.fn().mockResolvedValue(mockUser)
    const mockUserFindOne = jest.fn().mockResolvedValue(null)
    const User = jest.fn().mockImplementation(() => {
        return {
            save: mockUserSave
        }
    })
    User.findOne = mockUserFindOne

    const result = await registerUser(
        mockUser.name,
        mockUser.nationalId,
        mockUser.role,
        mockUser.address,
        mockUser.zipCode,
        mockUser.city,
        mockUser.province,
        mockUser.phone,
        mockUser.email,
        mockUser.password
    )

    expect(result).toEqual(mockUser)
    expect(User).toHaveBeenCalledTimes(1)
    expect(mockUserSave).toHaveBeenCalledTimes(1)
    expect(mockUserFindOne).toHaveBeenCalledTimes(1)
})

// Tests that the function throws a coherenceerror when a user with the same email already exists in the system. tags: [edge case]
test("test_existing_email", async () => {
    const mockUser = {
        name: "John Doe",
        nationalId: "123456789",
        role: "client",
        address: "123 Main St",
        zipCode: "12345",
        city: "Anytown",
        province: "Anyprovince",
        phone: "555-555-5555",
        email: "johndoe@example.com",
        password: "password123"
    }
    const mockUserFindOne = jest.fn().mockResolvedValue(mockUser)
    const User = jest.fn()
    User.findOne = mockUserFindOne

    await expect(registerUser(
        mockUser.name,
        mockUser.nationalId,
        mockUser.role,
        mockUser.address,
        mockUser.zipCode,
        mockUser.city,
        mockUser.province,
        mockUser.phone,
        mockUser.email,
        mockUser.password
    )).rejects.toThrow(CoherenceError)

    expect(User).toHaveBeenCalledTimes(0)
    expect(mockUserFindOne).toHaveBeenCalledTimes(1)
})

// Tests that the function throws a typeerror when the name parameter is not a string. tags: [edge case]
test("test_invalid_name_type", async () => {
    await expect(registerUser(
        123456789,
        "123456789",
        "client",
        "123 Main St",
        "12345",
        "Anytown",
        "Anyprovince",
        "555-555-5555",
        "johndoe@example.com",
        "password123"
    )).rejects.toThrow(TypeError)
})

// Tests that the function throws a coherenceerror when the role parameter is not 'admin' or 'client'. tags: [edge case]
test("test_invalid_role_value", async () => {
    await expect(registerUser(
        "John Doe",
        "123456789",
        "invalid role",
        "123 Main St",
        "12345",
        "Anytown",
        "Anyprovince",
        "555-555-5555",
        "johndoe@example.com",
        "password123"
    )).rejects.toThrow(CoherenceError)
})

// Tests that the function throws a rangeerror when the password parameter is less than 8 characters. tags: [edge case]
test("test_short_password", async () => {
    await expect(registerUser(
        "John Doe",
        "123456789",
        "client",
        "123 Main St",
        "12345",
        "Anytown",
        "Anyprovince",
        "555-555-5555",
        "johndoe@example.com",
        "pass"
    )).rejects.toThrow(RangeError)
})

// Tests that the function handles unexpected errors when connecting to the database. tags: [edge case]
test("test_database_error", async () => {
    const mockError = new Error("Database error")
    const User = jest.fn()
    User.findOne = jest.fn().mockRejectedValue(mockError)

    await expect(registerUser(
        "John Doe",
        "123456789",
        "client",
        "123 Main St",
        "12345",
        "Anytown",
        "Anyprovince",
        "555-555-5555",
        "johndoe@example.com",
        "password123"
    )).rejects.toThrow(mockError)

    expect(User).toHaveBeenCalledTimes(1)
})
