// Order data that can be used across components
export type Order = {
    id: string
    customer: string
    email: string
    product: string
    amount: number
    status: "pending" | "processing" | "completed" | "cancelled"
    date: string
}

export const orderData: Order[] = [
    {
        id: "ORD-001",
        customer: "John Doe",
        email: "john@example.com",
        product: "Widget Pro",
        amount: 299.99,
        status: "completed",
        date: "2025-11-24",
    },
    {
        id: "ORD-002",
        customer: "Jane Smith",
        email: "jane@example.com",
        product: "Gadget Plus",
        amount: 149.5,
        status: "processing",
        date: "2025-11-23",
    },
    {
        id: "ORD-003",
        customer: "Bob Johnson",
        email: "bob@example.com",
        product: "Super Tool",
        amount: 89.99,
        status: "pending",
        date: "2025-11-23",
    },
    {
        id: "ORD-004",
        customer: "Alice Brown",
        email: "alice@example.com",
        product: "Premium Kit",
        amount: 450.0,
        status: "completed",
        date: "2025-11-22",
    },
    {
        id: "ORD-005",
        customer: "Charlie Wilson",
        email: "charlie@example.com",
        product: "Basic Set",
        amount: 59.99,
        status: "cancelled",
        date: "2025-11-21",
    },
    {
        id: "ORD-006",
        customer: "Diana Lee",
        email: "diana@example.com",
        product: "Widget Pro",
        amount: 299.99,
        status: "processing",
        date: "2025-11-21",
    },
    {
        id: "ORD-007",
        customer: "Edward Kim",
        email: "edward@example.com",
        product: "Gadget Plus",
        amount: 149.5,
        status: "pending",
        date: "2025-11-20",
    },
    {
        id: "ORD-008",
        customer: "Fiona Chen",
        email: "fiona@example.com",
        product: "Super Tool",
        amount: 89.99,
        status: "completed",
        date: "2025-11-20",
    },
]
